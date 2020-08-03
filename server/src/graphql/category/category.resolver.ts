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

@Resolver(of => CategoryType)
export class CategoryResolver {
	constructor(private categoryService: CategoryService) {}

	@Mutation(type => CategoryType)
	createCategory(
		@Args("name") name: string,
		@Args("parentId", { type: () => Int }) parentId: number
	): Promise<CategoryEntity> {
		return this.categoryService.createCategory(name, parentId);
	}

	@Query(type => [CategoryType])
	categories() {
		return this.categoryService.getCategories();
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
