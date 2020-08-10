import { ObjectType, Field, Int } from "@nestjs/graphql";
import { ProductFieldType } from "./product-field/product-field.type";
import { LanguageType } from "src/graphql/general/language/language.type";

@ObjectType("ProductInfo")
export class ProductInfoType {
	@Field(type => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	language: LanguageType;

	@Field(type => [ProductFieldType], { nullable: true })
	fields: ProductFieldType[];
}
