import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType("ProductField")
export class ProductFieldType {
	@Field()
	id: string;
	@Field()
	value: string;
}
