import { ObjectType, Field, Int } from "@nestjs/graphql";
import { CategoryType } from "../category/category.type";
import { ProductInfoFieldType } from "./product-info/product-info-field/product-info-field.type";
import { ProductInfoType } from "./product-info/product-info.type";

@ObjectType("Product")
export class ProductType {
	@Field(type => Int)
	id: number;

	@Field()
	category: CategoryType;

	@Field(type => [ProductInfoType])
	info: ProductInfoType[];
}
