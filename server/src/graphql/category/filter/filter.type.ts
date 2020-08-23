import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType("Filter")
export class FilterType {
	@Field(type => Int)
	id: number;
}
