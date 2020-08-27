import { Field, InputType, Int } from "@nestjs/graphql";

@InputType("ProductInput")
export class ProductInput {
	@Field(type => Int, { nullable: true })
	id: number;
}
