import { InputType, Field } from "@nestjs/graphql";

@InputType("FilterGroupsInput")
export class FilterGroupsInput {
	@Field()
	id: string;
}
