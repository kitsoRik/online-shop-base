import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType("User")
export class UserType {
	@Field(type => Int)
	id: number;

	@Field()
	email: string;

	@Field()
	role: string;
}
