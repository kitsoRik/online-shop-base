import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("FilterValue")
export class FilterValueType {
	@Field()
	id: string;

	@Field()
	value: string;
}
