import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryInfoFieldEntity } from "./category-info-field.entity";
import { Repository } from "typeorm";
import { CategoryInfoFieldChangeInput } from "./category-info-field-change.input";

@Injectable()
export class CategoryInfoFieldService {
	constructor(
		@InjectRepository(CategoryInfoFieldEntity)
		private categoryInfoFieldRepository: Repository<CategoryInfoFieldEntity>
	) {}

	async changeField(fieldId: number, change: CategoryInfoFieldChangeInput) {
		const field = await this.categoryInfoFieldRepository.findOne({
			where: { id: fieldId }
		});

		field.name = change.name;
		field.value = change.value;

		await this.categoryInfoFieldRepository.save(field);

		return field;
	}

	async initField(categoryInfoId: number, categoryFieldId?: number) {
		const field = await this.categoryInfoFieldRepository.create({
			categoryInfoId,
			categoryFieldId
		});

		await this.categoryInfoFieldRepository.save(field);

		return field;
	}

	async getFields(categoryInfoId: number) {
		const fields = await this.categoryInfoFieldRepository.find({
			categoryInfoId
		});
		console.log(categoryInfoId, fields);
		return fields;
	}
}
