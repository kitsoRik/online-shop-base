import { ObjectType, Field, Int } from "@nestjs/graphql";
import { ProductInfoFieldType } from "./product-info-field/product-info-field.type";
import { LanguageType } from "src/graphql/general/language/language.type";

@ObjectType("ProductInfo")
export class ProductInfoType {
	@Field(type => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	language: LanguageType;

	@Field(type => [ProductInfoFieldType], { nullable: true })
	fields: ProductInfoFieldType[];
}
