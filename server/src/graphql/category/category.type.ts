import { ObjectType, Field, Int } from "@nestjs/graphql";
import { CategoryFieldType } from "./category-field/category-field.type";
import { CategoryInfoType } from "./product-info/category-info.type";
import { CategoryInfoEntity } from "./product-info/category-info.entity";

@ObjectType("Category")
export class CategoryType {
	@Field(type => Int)
	id: number;

	@Field()
	name: string;

	@Field(type => CategoryType, { nullable: true })
	parent: CategoryType;

	@Field(type => Int)
	level: number;

	@Field(type => [CategoryType], { nullable: true })
	children: CategoryType[];

	@Field(type => [CategoryFieldType], { nullable: true })
	fields: CategoryFieldType[];

	@Field(type => [CategoryInfoType])
	info: CategoryInfoEntity[];
}
