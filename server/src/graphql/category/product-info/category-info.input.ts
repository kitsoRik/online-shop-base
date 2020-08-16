import { Field, InputType, Int } from "@nestjs/graphql";

@InputType("CategoryInfoInput")
export class CategoryInfoInput {
	@Field(type => Int, { nullable: true })
	id: number;

	@Field({ nullable: true })
	languageCode: String;
}

@InputType("ChangeCategoryInfoInput")
export class ChangeCategoryInfoInput {
	@Field(type => String, { nullable: true })
	name: string;
}
