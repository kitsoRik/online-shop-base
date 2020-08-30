import { Field, InputType, Int } from "@nestjs/graphql";
import JSON from "graphql-type-json";

@InputType()
export class CategoryFieldChangeInput {
	@Field()
	name: string;

	@Field()
	type: string;

	@Field()
	defaultValue: string;

	@Field(type => JSON)
	options: object;
}
