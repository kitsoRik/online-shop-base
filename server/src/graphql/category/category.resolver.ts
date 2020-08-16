import {
	Resolver,
	Mutation,
	Query,
	Args,
	Int,
	ResolveField,
	Info,
	Parent
} from "@nestjs/graphql";
import { CategoryType } from "./category.type";
import { CategoryService } from "./category.service";
import { CategoryEntity } from "./category.entity";
import { AccessAdmin } from "../user/decorators/access-admin.decorator";
import { CategoryInfoFielddInput } from "./product-info/category-info-field/category-info-field.input";
import { CategoryFilter } from "./category.filter";
import { CategoryInfoType } from "./product-info/category-info.type";
import { CategoryInfoService } from "./product-info/category-info.service";
import { CategoryInfoInput } from "./product-info/category-info.input";

@Resolver(of => CategoryType)
export class CategoryResolver {
	constructor(
		private categoryService: CategoryService,
		private categoryInfoService: CategoryInfoService
	) {}

	@Mutation(type => CategoryType)
	@AccessAdmin()
	createCategory(
		@Args("name") name: string,
		@Args("level", { type: () => Int }) level: number,
		@Args("parentId", { type: () => Int, nullable: true }) parentId: number
	): Promise<CategoryEntity> {
		return this.categoryService.createCategory(name, level, parentId);
	}

	@Mutation(type => CategoryType)
	@AccessAdmin()
	changeCategory(
		@Args("id", { type: () => Int }) id: number,
		@Args("name") name: string
	): Promise<CategoryEntity> {
		return this.categoryService.changeCategory(id, name);
	}

	@Mutation(type => CategoryType)
	@AccessAdmin()
	addFieldToCategory(
		@Args("id", { type: () => Int }) id: number,
		@Args("name") name: string
	): Promise<CategoryEntity> {
		return this.categoryService.addField(id, name);
	}

	@Mutation(type => CategoryType)
	@AccessAdmin()
	changeFieldInCategory(
		@Args("id", { type: () => Int }) id: number,
		@Args("fieldId") fieldId: string,
		@Args("name") name: string
	): Promise<CategoryEntity> {
		return this.categoryService.changeField(id, fieldId, name);
	}

	@Mutation(type => CategoryType)
	@AccessAdmin()
	removeFieldFromCategory(
		@Args("id", { type: () => Int }) id: number,
		@Args("fieldId") fieldId: string
	): Promise<CategoryEntity> {
		return this.categoryService.removeField(id, fieldId);
	}

	@Query(type => [CategoryType])
	findCategoryByNameTemplate(
		@Args("template", { nullable: true, defaultValue: "" }) template: string
	) {
		return this.categoryService.findByNameTemplate(template);
	}

	@Query(type => [CategoryType], { nullable: true })
	async categories(
		@Args("filter", { type: () => CategoryFilter, nullable: true })
		filter: CategoryFilter
	) {
		if (filter) {
			if (filter.id) {
				const category = await this.categoryService.findById(filter.id);
				if (!category) return [];
				return [category];
			}
		}
		return this.categoryService.getCategories(filter);
	}

	@ResolveField(type => CategoryType)
	parent(@Parent() { parentId }: { parentId?: number }) {
		if (!parentId) return null;
		return this.categoryService.getParent(parentId);
	}

	@ResolveField(type => CategoryType)
	children(@Parent() { id }: { id: number }) {
		return this.categoryService.getChildren(id);
	}

	@ResolveField(type => CategoryType)
	fields(
		@Parent() { id }: { id: number },
		@Args("filter", { nullable: true }) filter: CategoryInfoFielddInput
	) {
		console.log(filter);
		return this.categoryService.getFields(id);
	}

	@ResolveField(type => [CategoryInfoType])
	info(
		@Parent() { id }: { id: number },
		@Args("filter", { nullable: true }) filter: CategoryInfoInput
	) {
		if (!filter) return this.categoryInfoService.getInfoByCategoryId(id);
		if (filter.id) {
			return this.categoryInfoService.getInfoByCategoryIdAndInfoId(
				id,
				filter.id
			);
		}
	}
}
