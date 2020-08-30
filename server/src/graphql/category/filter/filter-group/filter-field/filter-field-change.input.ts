import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class FilterFieldChangeInput {
	@Field()
	name: string;

	@Field()
	type: string;

	@Field(type => Int)
	categoryFieldId: number;
}
