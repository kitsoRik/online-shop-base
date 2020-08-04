import { ObjectType, Field, Int } from "@nestjs/graphql";
import { CategoryType } from "../category/category.type";
import { ProductFieldType } from "./product-field/product-field.type";

@ObjectType("Product")
export class ProductType {
	@Field(type => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	category: CategoryType;

	@Field(type => [ProductFieldType], { nullable: true })
	fields: ProductFieldType[];
}
