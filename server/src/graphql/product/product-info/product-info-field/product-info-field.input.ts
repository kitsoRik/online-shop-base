import { Field, InputType, Int } from "@nestjs/graphql";

@InputType("ProductInfoFieldInput")
export class ProductInfoFieldInput {
	@Field(type => Int, { nullable: true })
	id: number;
}
