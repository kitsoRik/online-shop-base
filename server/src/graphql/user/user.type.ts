import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType("User")
export class UserType {
	@Field(type => Int)
	id: number;

	@Field()
	firstName: string;

	@Field()
	lastName: string;

	@Field()
	middleName: string;

	@Field()
	phone: string;

	@Field()
	email: string;

	@Field()
	role: string;
}
