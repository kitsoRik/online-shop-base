import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "../../../category.entity";
import { Repository } from "typeorm";
import { FilterFieldEntity } from "./filter-field.entity";
import { GraphQLError } from "graphql";
import { CategoryFieldEntity } from "src/graphql/category/category-field/category-field.entity";
import { FilterFieldChangeInput } from "./filter-field-change.input";

@Injectable()
export class FilterFieldService {
	constructor(
		@InjectRepository(FilterFieldEntity)
		private filterFieldRepository: Repository<FilterFieldEntity>,
		@InjectRepository(CategoryFieldEntity)
		private categoryFieldRepository: Repository<CategoryFieldEntity>
	) {}

	async addFieldToFilterGroup(filterGroupId: string, name: string) {
		const field = this.filterFieldRepository.create({
			filterGroupId,
			name
		});

		await this.filterFieldRepository.save(field);

		return field;
	}

	async changeField(id: string, change: FilterFieldChangeInput) {
		const field = await this.filterFieldRepository.findOne({
			where: { id }
		});

		if (!field) throw new GraphQLError("UNKNOWN_FIELD");

		field.name = change.name;
		field.type = change.type;
		field.categoryFieldId = change.categoryFieldId;

		await this.filterFieldRepository.save(field);

		return field;
	}

	async getCategoryField(categoryFieldId: number | null) {
		if (categoryFieldId === null) return null;

		return this.categoryFieldRepository.findOne({
			where: { id: categoryFieldId }
		});
	}
}
