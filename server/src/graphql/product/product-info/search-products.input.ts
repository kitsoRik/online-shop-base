import { InputType, Field, Int } from "@nestjs/graphql";

@InputType("SearchProductsInput")
export class SearchProductsInput {
	@Field({ nullable: true })
	nameTemplate: string;

	@Field({ nullable: true })
	languageCode: string;
}
