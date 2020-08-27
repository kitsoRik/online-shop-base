import { Field, InputType, Int } from "@nestjs/graphql";

@InputType("CategoryInfoFielddInput")
export class CategoryInfoFielddInput {
	@Field(type => Int, { nullable: true })
	id: number;
}
