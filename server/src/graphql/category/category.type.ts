import { ObjectType, Field, Int } from "@nestjs/graphql";
import { CategoryFieldType } from "./category-field/category-field.type";

@ObjectType("Category")
export class CategoryType {
	@Field(type => Int)
	id: number;

	@Field()
	name: string;

	@Field(type => CategoryType, { nullable: true })
	parent: CategoryType;

	@Field(type => [CategoryType], { nullable: true })
	children: CategoryType[];

	@Field(type => [CategoryFieldType], { nullable: true })
	fields: CategoryFieldType[];
}
