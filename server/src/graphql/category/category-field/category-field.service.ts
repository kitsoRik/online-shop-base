import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryFieldEntity } from "./category-field.entity";
import { CategoryFieldInput } from "./category-field.input";
import { CategoryFieldChangeInput } from "./category-field-change.input";
import { GraphQLError } from "graphql";
import { CategoryInfoFielddInput } from "../product-info/category-info-field/category-info-field.input";

@Injectable()
export class CategoryFieldService {
	constructor(
		@InjectRepository(CategoryFieldEntity)
		private categoryFieldRepository: Repository<CategoryFieldEntity>
	) {}

	async addField(categoryId: number, fieldInput: CategoryFieldInput) {
		const field = await this.categoryFieldRepository.create({
			categoryId,
			name: fieldInput.name,
			type: fieldInput.type,
			defaultValue: fieldInput.defaultValue,
			options: fieldInput.options
		});

		await this.categoryFieldRepository.save(field);

		return field;
	}

	async changeField(fieldId: number, change: CategoryFieldChangeInput) {
		const field = await this.categoryFieldRepository.findOne({
			id: fieldId
		});

		if (!field) throw new GraphQLError("UNKNOWN_FIELD");

		field.name = change.name;
		field.type = change.type;
		field.defaultValue = change.defaultValue;
		field.options = change.options;

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

	async getFields(categoryId: number, filter: CategoryInfoFielddInput) {
		const query = this.categoryFieldRepository.createQueryBuilder("field");

		query.where("category_id = :categoryId", { categoryId });

		if (filter) {
			if (filter.id !== undefined && filter.id !== null) {
				query.where("id = :id", { id: filter.id });
			}
		}

		console.log(query.getSql());

		return query.getMany();
	}
}
