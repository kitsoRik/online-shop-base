import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { Repository } from "typeorm";

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
}
