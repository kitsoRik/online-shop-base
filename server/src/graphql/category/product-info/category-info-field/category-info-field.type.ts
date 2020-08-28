import { ObjectType, Field, Int } from "@nestjs/graphql";
import { CategoryFieldType } from "../../category-field/category-field.type";

@ObjectType("CategoryInfoField")
export class CategoryInfoFieldType {
	@Field(type => Int)
	id: number;
	@Field()
	name: string;
	@Field({ nullable: true })
	value: string;
}
