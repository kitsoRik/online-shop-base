import { Field, InputType } from "@nestjs/graphql";
import JSON from "graphql-type-json";

@InputType("CategoryFieldInput")
export class CategoryFieldInput {
	@Field()
	name: string;

	@Field()
	type: string;

	@Field()
	defaultValue: string;

	@Field(type => JSON)
	options: object;
}
