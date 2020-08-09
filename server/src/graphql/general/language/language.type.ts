import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType("Language")
export class LanguageType {
	@Field(type => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	code: string;
}
