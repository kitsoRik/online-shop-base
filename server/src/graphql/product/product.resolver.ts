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
import { CategoryService } from "../category/category.service";
import { ProductInput } from "./product.input";
import { ProductInfoType } from "./product-info/product-info.type";
import { ProductInfoService } from "./product-info/product-info.service";
import { ProductInfoInput } from "./product-info/product-info.input";

@Resolver(of => ProductType)
export class ProductResolver {
	constructor(
		private productService: ProductService,
		private productInfoService: ProductInfoService,
		private categoryService: CategoryService
	) {}

	@Mutation(type => ProductType)
	@AccessAdmin()
	createProduct(@Args("categoryId", { type: () => Int }) categoryId: number) {
		return this.productService.createProduct(categoryId);
	}

	@Mutation(type => ProductType)
	@AccessAdmin()
	changeProduct(@Args("id", { type: () => Int }) id: number) {
		return this.productService.changeProduct(id);
	}

	@Mutation(type => ProductType)
	@AccessAdmin()
	changeCategoryInProduct(
		@Args("id", { type: () => Int }) id: number,
		@Args("categoryId", { type: () => Int }) categoryId: number
	) {
		return this.productService.changeCategory(id, categoryId);
	}

	@Query(type => [ProductType])
	products(
		@Args("filter", { type: () => ProductInput, nullable: true })
		filter: ProductInput
	) {
		console.log(filter);
		if (filter.id !== undefined) {
			return [this.productService.findById(filter.id)];
		}
	}

	@ResolveField(type => ProductType)
	category(@Parent() { categoryId }: { categoryId: number }) {
		return this.categoryService.findById(categoryId);
	}

	@ResolveField(type => [ProductInfoType])
	info(
		@Parent() { id }: { id: number },
		@Args("filter", { nullable: true }) filter: ProductInfoInput
	) {
		if (!filter) return this.productInfoService.getInfoByProductId(id);
		if (filter.id) {
			return this.productInfoService.getInfoByProductIdAndInfoId(
				id,
				filter.id
			);
		}
	}
}
