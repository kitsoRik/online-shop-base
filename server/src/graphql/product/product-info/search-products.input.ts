import { InputType, Field, Int } from "@nestjs/graphql";

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
}
