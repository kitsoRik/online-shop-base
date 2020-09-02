import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("FilterValue")
export class FilterValueType {
	@Field(type => Int)
	id: number;

	@Field()
	value: string;
}
