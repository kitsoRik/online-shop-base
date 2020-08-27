import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class FilterGroupFieldsInput {
	@Field({ nullable: true })
	id: string;
}
