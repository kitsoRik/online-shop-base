import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType("ProductInfoField")
export class ProductInfoFieldType {
	@Field(type => Int)
	id: number;

	@Field({ nullable: true })
	name: string;

	@Field()
	value: string;
}
