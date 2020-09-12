import { ObjectType, Field, Int } from "@nestjs/graphql";
import JSON from "graphql-type-json";

@ObjectType("FilterField")
export class FilterFieldType {
	@Field()
	id: string;

	@Field()
	name: string;

	@Field(type => Int)
	index: number;

	@Field()
	type: string;

	@Field(type => JSON)
	options: object;
}
