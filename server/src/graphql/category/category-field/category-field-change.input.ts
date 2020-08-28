import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CategoryFieldChangeInput {
	@Field()
	name: string;

	@Field()
	type: string;

	@Field()
	defaultValue: string;
}
