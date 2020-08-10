import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { Repository } from "typeorm";
import { GraphQLError } from "graphql";
import { ProductInfoService } from "./product-info/product-info.service";

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(ProductEntity)
		private productRepository: Repository<ProductEntity>
	) {}

	async createProduct(categoryId: number) {
		const product = await this.productRepository.create({
			categoryId
		});

		await this.productRepository.save(product);

		return product;
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

	async findByNameTemplate(template: string) {
		const query = await this.productRepository
			.createQueryBuilder("products")
			.where("name LIKE :template", { template: `%${template}%` });
		const products = await query.getMany();
		return products;
	}

	async getInfo(id: number) {
		const product = await this.productRepository.findOne({ id });
		return product;
	}
}
