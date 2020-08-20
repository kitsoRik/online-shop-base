import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryFieldEntity } from "./category-field.entity";

@Injectable()
export class CategoryFieldService {
	constructor(
		@InjectRepository(CategoryFieldEntity)
		private categoryFieldRepository: Repository<CategoryFieldEntity>
	) {}

	async addField(categoryId: number, name: string) {
		const field = await this.categoryFieldRepository.create({
			categoryId,
			name
		});

		await this.categoryFieldRepository.save(field);

		return field;
	}

	async changeField(fieldId: number, name: string) {
		const field = await this.categoryFieldRepository.findOne({
			id: fieldId
		});

		field.name = name;

		await this.categoryFieldRepository.save(field);

		return field;
	}

	async removeField(fieldId: number): Promise<number> {
		const field = await this.categoryFieldRepository.findOne({
			id: fieldId
		});

		field.removed = true;

		await this.categoryFieldRepository.save(field);

		return field.categoryId;
	}

	async getField(fieldId: number) {
		const field = await this.categoryFieldRepository.findOne({
			where: { id: fieldId }
		});

		return field;
	}

	async getFields(categoryId: number) {
		const fields = await this.categoryFieldRepository.find({
			where: { categoryId }
		});

		return fields;
	}
}
