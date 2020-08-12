import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType("CategoryInfoField")
export class CategoryInfoFieldType {
	@Field()
	id: string;
	@Field()
	value: string;
}
