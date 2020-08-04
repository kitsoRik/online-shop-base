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
import { ProductFieldInput } from "./product-field/product-field.input";

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

	@Mutation(type => ProductType)
	@AccessAdmin()
	changeProduct(
		@Args("id", { type: () => Int }) id: number,
		@Args("name") name: string
	) {
		return this.productService.changeProduct(id, name);
	}

	@Mutation(type => ProductType)
	@AccessAdmin()
	changeFieldInProduct(
		@Args("id", { type: () => Int }) id: number,
		@Args("fieldId") fieldId: string,
		@Args("value") value: string
	) {
		return this.productService.changeField(id, fieldId, value);
	}

	@Query(type => [ProductType])
	products(
		@Args("filter", { type: () => ProductInput, nullable: true })
		filter: ProductInput
	) {
		if (filter.id !== undefined) {
			return [this.productService.findById(filter.id)];
		}
	}

	@Query(type => [ProductType])
	findProductByNameTemplate(
		@Args("template", { nullable: true, defaultValue: "" }) template: string
	) {
		return this.productService.findByNameTemplate(template);
	}

	@ResolveField(type => ProductType)
	category(@Parent() { id }: { id: number }) {
		return this.categoryService.findById(id);
	}

	@ResolveField(type => ProductType)
	fields(
		@Parent() { id }: { id: number },
		@Args("filter", { nullable: true }) filter: ProductFieldInput
	) {
		return this.productService.getFields(id);
	}
}
