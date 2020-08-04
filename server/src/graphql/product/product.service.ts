import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { Repository } from "typeorm";
import { GraphQLError } from "graphql";

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(ProductEntity)
		private productRepository: Repository<ProductEntity>
	) {}

	async createProduct(name: string, categoryId: number) {
		const product = await this.productRepository.create({
			name,
			categoryId
		});

		await this.productRepository.save(product);

		return product;
	}

	async changeProduct(id: number, name: string) {
		const product = await this.productRepository.findOne({
			id
		});

		if (!product) {
			throw new GraphQLError("UNKNOWN_CATEGORY");
		}

		product.name = name;

		await this.productRepository.save(product);

		return product;
	}

	async changeField(id: number, fieldId: string, value: string) {
		const product = await this.findById(id);

		const oldField = product.fields.find(f => f.id === fieldId);

		if (!oldField) throw new Error("UNKNOWN_FIELD");

		oldField.value = value;

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

	async getFields(id: number) {
		const product = await this.productRepository.findOne({
			id
		});

		return product.fields;
	}
}
