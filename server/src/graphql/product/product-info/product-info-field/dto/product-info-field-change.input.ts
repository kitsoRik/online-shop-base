import { Field, InputType, Int } from "@nestjs/graphql";

@InputType("ProductInfoFieldChangeInput")
export class ProductInfoFieldChangeInput {
	@Field({ nullable: true })
	name: string;

	@Field()
	value: string;
}
