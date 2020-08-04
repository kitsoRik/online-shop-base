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
import { CategoryFieldInput } from "./category-field/category-field.input";

@Resolver(of => CategoryType)
export class CategoryResolver {
	constructor(private categoryService: CategoryService) {}

	@Mutation(type => CategoryType)
	@AccessAdmin()
	createCategory(
		@Args("name") name: string,
		@Args("parentId", { type: () => Int, nullable: true }) parentId: number
	): Promise<CategoryEntity> {
		return this.categoryService.createCategory(name, parentId);
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
	categories() {
		return this.categoryService.getCategories();
	}

	@Query(type => [CategoryType])
	findCategoryByNameTemplate(
		@Args("template", { nullable: true, defaultValue: "" }) template: string
	) {
		return this.categoryService.findByNameTemplate(template);
	}

	@Query(type => CategoryType, { nullable: true })
	findCategoryById(@Args("id", { type: () => Int }) id: number) {
		return this.categoryService.findById(id);
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
		@Args("filter", { nullable: true }) filter: CategoryFieldInput
	) {
		console.log(filter);
		return this.categoryService.getFields(id);
	}
}
