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
import { ProductInfoFieldInput } from "./product-info-field/product-info-field.input";
import { ProductInfoFieldType } from "./product-info-field/product-info-field.type";
import { ProductService } from "../product.service";
import { ProductType } from "../product.type";
import { LanguageService } from "src/config/language/language.service";
import { ProductInfoEntity } from "./product-info.entity";
import { SearchProductsInput } from "./search-products.input";
import { SearchProductsOutput } from "./search-products.output";
import { SearchProductsPaginationInput } from "./search-products-pagination.input";
import { CategoryType } from "src/graphql/category/category.type";

@Resolver(of => ProductInfoType)
export class ProductInfoResolver {
	constructor(
		private productInfoService: ProductInfoService,
		private productService: ProductService,
		private languageService: LanguageService
	) {}

	@Mutation(type => ProductType)
	@AccessAdmin()
	async addProductInfoToProduct(
		@Args("productId", { type: () => Int }) productId: number,
		@Args("language", { type: () => Int }) language: number
	) {
		await this.productInfoService.addProductInfo(productId, language);
		return this.productService.findById(productId);
	}

	@Mutation(type => ProductType)
	@AccessAdmin()
	async removeInfoFromProduct(
		@Args("productId", { type: () => Int }) productId: number,
		@Args("infoId", { type: () => Int }) infoId: number
	) {
		await this.productInfoService.removeProductInfo(productId, infoId);
		return this.productService.findById(productId);
	}

	@Mutation(type => ProductInfoType)
	@AccessAdmin()
	changeProductInfo(
		@Args("id", { type: () => Int }) id: number,
		@Args("change") change: ChangeProductInfoInput
	) {
		return this.productInfoService.changeProductInfo(id, change);
	}

	@ResolveField(type => ProductType)
	product(@Parent() { productId }: ProductInfoEntity) {
		return this.productService.findById(productId);
	}

	@ResolveField(type => ProductInfoType)
	fields(
		@Parent() { id }: { id: number },
		@Args("filter", { nullable: true }) filter: ProductInfoFieldInput
	) {
		return this.productInfoService.getFields(id, filter);
	}

	@ResolveField(type => ProductInfoType)
	language(@Parent() parent: ProductInfoEntity) {
		return this.languageService.getLanguageById(parent.languageId);
	}

	@Query(type => [CategoryType])
	async searchProductsCategory(
		@Args("filter", { nullable: true })
		filter: SearchProductsInput
	) {
		const categories = await this.productInfoService.searchProductsCategory(
			filter
		);
		return categories;
	}

	@Query(type => SearchProductsOutput)
	async searchProducts(
		@Args("filter", { nullable: true })
		filter: SearchProductsInput,
		@Args("pagination")
		pagination: SearchProductsPaginationInput
	): Promise<{ productsInfo: ProductInfoEntity[]; count: number }> {
		const [
			productsInfo,
			count
		] = await this.productInfoService.searchProducts(pagination, filter);
		return { productsInfo, count };
	}
}
