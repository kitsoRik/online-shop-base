import { ObjectType, Field, Int } from "@nestjs/graphql";

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
}
