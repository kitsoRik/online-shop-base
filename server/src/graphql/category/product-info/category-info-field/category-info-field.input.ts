import { Field, InputType } from "@nestjs/graphql";

@InputType("CategoryInfoFielddInput")
export class CategoryInfoFielddInput {
	@Field(type => String, { nullable: true })
	id: string;
}
