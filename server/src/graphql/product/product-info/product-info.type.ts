import { ObjectType, Field, Int } from "@nestjs/graphql";
import { ProductFieldType } from "./product-field/product-field.type";

@ObjectType("ProductInfo")
export class ProductInfoType {
	@Field(type => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	language: String;

	@Field(type => [ProductFieldType], { nullable: true })
	fields: ProductFieldType[];
}
