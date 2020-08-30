import { ObjectType, Field, Int } from "@nestjs/graphql";
import { CategoryFieldType } from "src/graphql/category/category-field/category-field.type";

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
