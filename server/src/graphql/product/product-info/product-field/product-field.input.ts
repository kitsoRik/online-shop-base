import { Field, InputType } from "@nestjs/graphql";

@InputType("ProductFieldInput")
export class ProductFieldInput {
	@Field(type => String, { nullable: true })
	id: string;
}
