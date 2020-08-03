import { ObjectType, Field, Int } from "@nestjs/graphql";

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
}
