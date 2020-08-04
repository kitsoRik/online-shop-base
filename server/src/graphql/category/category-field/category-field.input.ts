import { Field, InputType } from "@nestjs/graphql";

@InputType("CategoryFieldInput")
export class CategoryFieldInput {
	@Field(type => String, { nullable: true })
	id: string;
}
