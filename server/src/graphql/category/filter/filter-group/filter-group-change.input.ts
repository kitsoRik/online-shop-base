import { Field, InputType, Int } from "@nestjs/graphql";

@InputType("FilterGroupChange")
export class FilterGroupChangeInput {

	@Field(type => [String], { nullable: true })
	orderedItemsIds: string[];

	@Field(type => Int, { nullable: true })
	deleteIndex: number;

	@Field({ nullable: true })
	newGroupId: string;

	@Field(type => Int, { nullable: true })
	newGroupIndex: number;
}
