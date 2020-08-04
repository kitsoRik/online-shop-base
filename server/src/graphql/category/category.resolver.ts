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
import { RolesGuard } from "../user/guards/roles.guard";
import { AccessAdmin } from "../user/decorators/access-admin.decorator";

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
}
