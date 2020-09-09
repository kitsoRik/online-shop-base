import { InputType, Field, Int } from "@nestjs/graphql";
import JSON from "graphql-type-json";

@InputType("SearchProductsInput")
export class SearchProductsInput {
	@Field({ nullable: true })
	nameTemplate: string;

	@Field({ nullable: true })
	languageCode: string;

	@Field(type => Int, { nullable: true })
	categoryId: number;

	@Field(type => Int, { nullable: true })
	subCategoryId: number;

	@Field(type => Int, { nullable: true })
	rootCategoryId: number;

	@Field(type => JSON, { nullable: true })
	options: object;
}
