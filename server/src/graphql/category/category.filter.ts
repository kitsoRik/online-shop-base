import { Field, Int, InputType } from "@nestjs/graphql";

@InputType("CategoryInput")
export class CategoryFilter {
	@Field(type => Int, { nullable: true })
	id: number;

	@Field(type => Int, { nullable: true })
	level: number;
}
