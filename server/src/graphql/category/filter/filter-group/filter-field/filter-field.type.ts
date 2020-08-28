import { ObjectType, Field, Int } from "@nestjs/graphql";

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
}
