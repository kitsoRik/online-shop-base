import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductInfoEntity } from "./product-info.entity";
import { Repository } from "typeorm";
import { GraphQLError } from "graphql";
import { ChangeProductInfoInput } from "./product-info.input";
import { ProductService } from "../product.service";
import { SearchProductsInput } from "./search-products.input";
import { ProductInfoFieldInput } from "./product-info-field/product-info-field.input";
import { ProductInfoFieldEntity } from "./product-info-field/product-info-field.entity";
import { SearchProductsPaginationInput } from "./search-products-pagination.input";
import { ProductEntity } from "../product.entity";
import { CategoryEntity } from "src/graphql/category/category.entity";

@Injectable()
export class ProductInfoService {
	constructor(
		@InjectRepository(ProductInfoEntity)
		private productInfoRepository: Repository<ProductInfoEntity>,
		@InjectRepository(ProductInfoFieldEntity)
		private productInfoFieldRepository: Repository<ProductInfoFieldEntity>,
		@InjectRepository(CategoryEntity)
		private categoryRepository: Repository<CategoryEntity>,
		private productService: ProductService
	) {}

	async addProductInfo(productId: number, languageId: number) {
		const product = await this.productService.findById(productId);
		const hasProductInfo = await this.productInfoRepository.findOne({
			where: { productId, languageId }
		});
		if (hasProductInfo)
			throw new GraphQLError("ALREADY EXISTS THIS LANGUAGE");

		const productInfo = await this.productInfoRepository.create({
			product,
			languageId
		});

		await this.productInfoRepository.save(productInfo);

		return productInfo;
	}

	async removeProductInfo(productId: number, infoId: number) {
		const productInfo = await this.productInfoRepository.findOne({
			id: infoId
		});

		if (productInfo.productId !== productId)
			throw new GraphQLError("Bad link product id and info id");

		await this.productInfoRepository.remove(productInfo);
	}

	async changeProductInfo(id: number, change: ChangeProductInfoInput) {
		let productInfo = await this.productInfoRepository.findOne({
			id
		});

		if (!productInfo) {
			throw new GraphQLError("UNKNOWN_CATEGORY");
		}

		productInfo = { ...productInfo, ...change };

		await this.productInfoRepository.save(productInfo);

		return productInfo;
	}

	async findById(id: number) {
		const productInfo = await this.productInfoRepository.findOne({ id });
		return productInfo;
	}

	async searchProducts(
		pagination?: SearchProductsPaginationInput,
		filter?: SearchProductsInput
	) {
		const query = await this.productInfoRepository.createQueryBuilder(
			"products_info"
		);
		if (filter) {
			if (filter.nameTemplate) {
				query.andWhere("name LIKE :template", {
					template: `%${filter.nameTemplate}%`
				});
			}

			if (filter.languageCode !== undefined) {
				query.andWhere(
					"language_id IN (SELECT id FROM config_languages WHERE code = :languageCode)",
					{
						languageCode: filter.languageCode
					}
				);
			}

			if (filter.categoryId) {
				query.andWhere(
					"product_id IN (SELECT id FROM products WHERE category_id = :categoryId)",
					{
						categoryId: filter.categoryId
					}
				);
			}
		}

		if (pagination) {
			query.offset(pagination.offset);
			query.limit(pagination.limit);
		}

		const result = await query.getManyAndCount();
		return result;
	}

	async searchProductsCategory(filter?: SearchProductsInput) {
		const query = this.categoryRepository.createQueryBuilder();

		const subquery = this.productInfoRepository.createQueryBuilder(
			"products_info"
		);

		subquery.select("id");

		subquery.select("products.category_id");

		subquery.leftJoin(
			ProductEntity,
			"products",
			"products.id = products_info.product_id"
		);

		if (filter) {
			if (filter.nameTemplate) {
				subquery.andWhere("name LIKE :template", {
					template: `%${filter.nameTemplate}%`
				});
			}

			if (filter.languageCode !== undefined) {
				subquery.andWhere(
					"language_id IN (SELECT id FROM config_languages WHERE code = :languageCode)",
					{
						languageCode: filter.languageCode
					}
				);
			}

			if (filter.categoryId) {
				subquery.andWhere(
					"product_id IN (SELECT id FROM products WHERE category_id = :categoryId)",
					{
						categoryId: filter.categoryId
					}
				);
			}
		}

		subquery.groupBy("products.category_id");
		query.where(`id IN (${subquery.getQuery()})`);

		query.setParameter("languageCode", filter.languageCode);
		return await query.getMany();
	}

	async getFields(id: number, filter: ProductInfoFieldInput) {
		const query = this.productInfoFieldRepository.createQueryBuilder();

		query.where("product_info_id = :id", { id });
		console.log(filter);
		if (filter) {
			if (filter.id !== undefined) {
				query.where("id = :id", { id: filter.id });
			}
		}

		return query.getMany();
	}
}
