import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType("CategoryField")
export class CategoryFieldType {
	@Field()
	id: string;
	@Field()
	name: string;
}
