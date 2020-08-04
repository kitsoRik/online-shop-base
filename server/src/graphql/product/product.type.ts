import { ObjectType, Field, Int } from "@nestjs/graphql";
import { CategoryType } from "../category/category.type";

@ObjectType("Product")
export class ProductType {
	@Field(type => Int)
	id: number;

	@Field()
    name: string;
    
    @Field()
    category: CategoryType

	// @Field(type => [CategoryFieldType], { nullable: true })
	// fields: CategoryFieldType[];
}
