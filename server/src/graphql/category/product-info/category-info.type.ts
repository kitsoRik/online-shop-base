import { ObjectType, Field, Int } from "@nestjs/graphql";
import { CategoryInfoFieldType } from "./category-info-field/category-info-field.type";
import { LanguageType } from "src/graphql/general/language/language.type";

@ObjectType("CategoryInfo")
export class CategoryInfoType {
	@Field(type => Int)
	id: number;

	@Field(type => String)
	name: string;

	@Field({ nullable: false })
	language: LanguageType;

	@Field(type => [CategoryInfoFieldType], { nullable: true })
	fields: CategoryInfoFieldType[];
}
