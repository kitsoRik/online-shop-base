import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "./category.entity";
import { Repository } from "typeorm";
import { GraphQLError } from "graphql";

import * as uuid from "uuid";
import { CategoryFieldEntity } from "./category-field/category-field";
import { CategoryFilter } from "./category.filter";

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(CategoryEntity)
		private categoryRepository: Repository<CategoryEntity>
	) {}

	async createCategory(name: string, level: number, parentId?: number) {
		if (level === 0 && parentId)
			throw new GraphQLError("Level cannot be zero with parentId");
		if (level !== 0 && !parentId)
			throw new GraphQLError(
				"Level cannot be non zero with parentId = null"
			);

		const category = await this.categoryRepository.create({
			name,
			level,
			parentId
		});

		await this.categoryRepository.save(category);

		return category;
	}

	async changeCategory(id: number, name: string) {
		const category = await this.categoryRepository.findOne({
			id
		});

		if (!category) {
			throw new GraphQLError("UNKNOWN_CATEGORY");
		}

		category.name = name;

		await this.categoryRepository.save(category);

		return category;
	}

	async getParent(parentId: number) {
		const category = await this.categoryRepository.findOne({
			id: parentId
		});
		return category;
	}

	async getChildren(id: number) {
		const category = await this.categoryRepository.find({
			parentId: id
		});
		return category;
	}

	async getFields(id: number) {
		const category = await this.categoryRepository.findOne({
			id
		});

		return category.fields;
	}

	async addField(id: number, name: string) {
		const category = await this.categoryRepository.findOne({
			id
		});

		const newField: CategoryFieldEntity = { id: uuid.v4(), name };

		category.fields = [...category.fields, newField];

		await this.categoryRepository.save(category);

		return category;
	}

	async changeField(id: number, fieldId: string, name: string) {
		const category = await this.categoryRepository.findOne({
			id
		});

		const oldField = category.fields.find(f => f.id === fieldId);

		if (!oldField) throw new Error("UNKNOWN_FIELD");

		oldField.name = name;

		await this.categoryRepository.save(category);

		return category;
	}

	async removeField(id: number, fieldId: string) {
		const category = await this.categoryRepository.findOne({
			id
		});

		const oldField = category.fields.find(f => f.id === fieldId);

		if (!oldField) throw new Error("UNKNOWN_FIELD");

		category.fields = category.fields.filter(f => f.id !== fieldId);

		await this.categoryRepository.save(category);

		return category;
	}

	async getCategories(filter?: CategoryFilter) {
		const query = this.categoryRepository.createQueryBuilder("categories");
		if (filter.level !== undefined) {
			query.andWhere("level = :level", { level: filter.level });
		}

		const categories = await query.getMany();
		return categories;
	}

	async findByNameTemplate(template: string) {
		const query = await this.categoryRepository
			.createQueryBuilder("categories")
			.where("name LIKE :template", { template: `%${template}%` });
		const categories = await query.getMany();
		return categories;
	}

	async findById(id: number) {
		const category = await this.categoryRepository.findOne({ id });
		return category;
	}
}
