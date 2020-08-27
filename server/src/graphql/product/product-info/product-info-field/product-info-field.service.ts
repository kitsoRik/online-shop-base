import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductInfoFieldEntity } from "./product-info-field.entity";
import { CategoryInfoFieldEntity } from "src/graphql/category/product-info/category-info-field/category-info-field.entity";
import { GraphQLError } from "graphql";
import { ProductInfoFieldChangeInput } from "./dto/product-info-field-change.input";

@Injectable()
export class ProductInfoFieldService {
	constructor(
		@InjectRepository(ProductInfoFieldEntity)
		private productInfoFieldRepository: Repository<ProductInfoFieldEntity>,
		@InjectRepository(CategoryInfoFieldEntity)
		private categoryInfoFieldRepository: Repository<CategoryInfoFieldEntity>
	) {}

	async addField(
		productInfoId: number,
		label: string,
		value: string,
		categoryInfoFieldId?: number
	) {
		const field = this.productInfoFieldRepository.create({
			productInfoId,
			name: label,
			value,
			categoryInfoFieldId
		});

		await this.productInfoFieldRepository.save(field);

		return field;
	}

	async changeField(
		id: number,
		{ name, value }: ProductInfoFieldChangeInput
	) {
		const query = this.productInfoFieldRepository
			.createQueryBuilder()
			.update();

		query.set({ name, value });

		query.where("id = :id", { id });

		await query.execute();

		return this.productInfoFieldRepository.findOne({ where: { id } });
	}

	async getCategoryInfoField(categoryInfoFieldId: number | null) {
		return this.categoryInfoFieldRepository.findOne({
			where: { id: categoryInfoFieldId }
		});
	}
}
