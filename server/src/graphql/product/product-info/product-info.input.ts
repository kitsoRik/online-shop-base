import { Field, InputType, Int } from "@nestjs/graphql";

@InputType("ProductInfoInput")
export class ProductInfoInput {
	@Field(type => Int, { nullable: true })
	id: number;
}

@InputType("ChangeProductInfoInput")
export class ChangeProductInfoInput {
	@Field(type => String, { nullable: true })
	name: string;
}
