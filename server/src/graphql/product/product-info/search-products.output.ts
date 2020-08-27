import { InputType, Field, ObjectType, Int } from "@nestjs/graphql";
import { ProductInfoType } from "./product-info.type";

@ObjectType("SearchProductsOutput")
export class SearchProductsOutput {
	@Field(type => [ProductInfoType])
	productsInfo: ProductInfoType[];

	@Field(type => Int)
	count: number;
}
