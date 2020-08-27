import { Field, InputType, Int } from "@nestjs/graphql";

@InputType("CategoryInfoFieldChangeInput")
export class CategoryInfoFieldChangeInput {
	@Field()
	name: string;

	@Field()
	value: string;
}
