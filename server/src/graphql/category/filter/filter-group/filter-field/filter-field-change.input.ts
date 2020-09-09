import { InputType, Field, Int } from "@nestjs/graphql";
import JSON from "graphql-type-json";

@InputType()
export class FilterFieldChangeInput {
	@Field()
	name: string;

	@Field()
	type: string;

	@Field(type => Int)
	categoryFieldId: number;

	@Field(type => JSON)
	options: object;
}
