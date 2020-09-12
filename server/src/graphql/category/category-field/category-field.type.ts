import { ObjectType, Field, Int } from "@nestjs/graphql";
import JSON from "graphql-type-json";

@ObjectType("CategoryField")
export class CategoryFieldType {
	@Field(type => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	type: string;

	@Field()
	defaultValue: string;

	@Field(type => JSON)
	options: object;
}
