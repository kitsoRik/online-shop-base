import { InputType, Field, Int } from "@nestjs/graphql";

@InputType("SearchProductsPaginationInput")
export class SearchProductsPaginationInput {
	@Field(type => Int, { nullable: true })
	offset: number;

	@Field(type => Int, { nullable: true })
	limit: number;
}
