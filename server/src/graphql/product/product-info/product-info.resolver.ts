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
import { AccessAdmin } from "../../user/decorators/access-admin.decorator";
import { ProductInfoService } from "./product-info.service";
import { ProductInfoType } from "./product-info.type";
import { CategoryService } from "../../category/category.service";
import { ProductInfoInput, ChangeProductInfoInput } from "./product-info.input";
import { ProductFieldInput } from "./product-field/product-field.input";
import { ProductService } from "../product.service";
import { ProductType } from "../product.type";

@Resolver(of => ProductInfoType)
export class ProductInfoResolver {
	constructor(
		private productInfoService: ProductInfoService,
		private productService: ProductService
	) {}

	@Mutation(type => ProductType)
	@AccessAdmin()
	async addProductInfoToProduct(
		@Args("productId", { type: () => Int }) productId: number,
		@Args("language") language: string
	) {
		await this.productInfoService.addProductInfo(productId, language);
		return this.productService.findById(productId);
	}

	@Mutation(type => ProductInfoType)
	@AccessAdmin()
	changeProductInfo(
		@Args("id", { type: () => Int }) id: number,
		@Args("infoId", { type: () => Int }) infoId: number,
		@Args("change") change: ChangeProductInfoInput
	) {
		return this.productInfoService.changeProductInfo(id, change);
	}

	@Mutation(type => ProductInfoType)
	@AccessAdmin()
	changeFieldInProductInfo(
		@Args("id", { type: () => Int }) id: number,
		@Args("fieldId") fieldId: string,
		@Args("value") value: string
	) {
		return this.productInfoService.changeField(id, fieldId, value);
	}

	@ResolveField(type => ProductInfoType)
	fields(
		@Parent() { id }: { id: number },
		@Args("filter", { nullable: true }) filter: ProductFieldInput
	) {
		return this.productInfoService.getFields(id);
	}
}