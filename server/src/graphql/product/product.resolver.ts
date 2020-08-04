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
import { AccessAdmin } from "../user/decorators/access-admin.decorator";
import { ProductService } from "./product.service";
import { ProductType } from "./product.type";
import { CategoryType } from "../category/category.type";
import { CategoryService } from "../category/category.service";

@Resolver(of => ProductType)
export class ProductResolver {
	constructor(
		private productService: ProductService,
		private categoryService: CategoryService
	) {}

	@Mutation(type => ProductType)
	@AccessAdmin()
	createProduct(
		@Args("name") name: string,
		@Args("categoryId", { type: () => Int }) categoryId: number
	) {
		return this.productService.createProduct(name, categoryId);
	}

	@ResolveField(type => CategoryType)
	category(@Parent() { id }: { id: number }) {
		return this.categoryService.findById(id);
	}
}
