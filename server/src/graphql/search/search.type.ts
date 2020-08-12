import { ObjectType, Field } from "@nestjs/graphql";
import { CategoryType } from "../category/category.type";

@ObjectType()
export class SearchType {
	@Field()
	query: string;
}
