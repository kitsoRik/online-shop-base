import { Resolver, Mutation, Int, Args } from "@nestjs/graphql";
import { CategoryType } from "../category.type";
import { AccessAdmin } from "src/graphql/user/decorators/access-admin.decorator";
import { CategoryEntity } from "../category.entity";
import { CategoryFieldService } from "./category-field.service";
import { CategoryFieldEntity } from "./category-field.entity";
import { CategoryService } from "../category.service";
import { CategoryFieldType } from "./category-field.type";

@Resolver("CategoryField")
export class CategoryFieldResolver {
	constructor(
		private categoryFieldService: CategoryFieldService,
		private categoryService: CategoryService
	) {}

	@Mutation(type => CategoryType)
	@AccessAdmin()
	async addFieldToCategory(
		@Args("categoryId", { type: () => Int }) categoryId: number,
		@Args("name") name: string
	) {
		await this.categoryFieldService.addField(categoryId, name);
		return this.categoryService.findById(categoryId);
	}

	@Mutation(type => CategoryFieldType)
	@AccessAdmin()
	changeFieldInCategory(
		@Args("fieldId", { type: () => Int }) fieldId: number,
		@Args("name") name: string
	): Promise<CategoryFieldEntity> {
		return this.categoryFieldService.changeField(fieldId, name);
	}

	@Mutation(type => CategoryType)
	@AccessAdmin()
	async removeFieldFromCategory(
		@Args("fieldId", { type: () => Int }) fieldId: number
	) {
		const categoryId = await this.categoryFieldService.removeField(fieldId);
		return this.categoryService.findById(categoryId);
	}
}
