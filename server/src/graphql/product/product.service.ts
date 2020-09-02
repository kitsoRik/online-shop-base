import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { Repository } from "typeorm";
import { GraphQLError } from "graphql";
import { ProductInfoService } from "./product-info/product-info.service";
import { ProductInfoInput } from "./product-info/product-info.input";
import { ProductInfoEntity } from "./product-info/product-info.entity";
import { FilterValueEntity } from "./filter-value/filter-value.entity";

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(ProductEntity)
		private productRepository: Repository<ProductEntity>,
		@InjectRepository(ProductInfoEntity)
		private productInfoRepository: Repository<ProductInfoEntity>,
		@InjectRepository(FilterValueEntity)
		private filterValueRepository: Repository<FilterValueEntity>
	) {}

	async createProduct(categoryId: number) {
		const product = await this.productRepository.create({
			categoryId
		});

		await this.productRepository.save(product);

		return product;
	}

	async getProducts() {
		return await this.productRepository.find();
	}

	async changeProduct(id: number) {
		const product = await this.productRepository.findOne({
			id
		});

		if (!product) {
			throw new GraphQLError("UNKNOWN_PRODUCT");
		}

		await this.productRepository.save(product);

		return product;
	}

	async changeCategory(id: number, categoryId: number) {
		const product = await this.productRepository.findOne({
			id
		});

		if (!product) {
			throw new GraphQLError("UNKNOWN_PRODUCT");
		}

		product.categoryId = categoryId;

		await this.productRepository.save(product);

		return product;
	}

	async findById(id: number) {
		const product = await this.productRepository.findOne({ id });
		return product;
	}

	async getInfo(productId: number, filter: ProductInfoInput) {
		const query = this.productInfoRepository.createQueryBuilder();

		query.where("product_id = :productId", { productId });

		if (filter) {
			if (filter.id !== undefined) {
				query.andWhere("id = :id", { id: filter.id });
			}
		}

		return query.getMany();
	}

	async getFilterValues(productId: number) {
		return await this.filterValueRepository.find({ where: { productId } });
	}
}
