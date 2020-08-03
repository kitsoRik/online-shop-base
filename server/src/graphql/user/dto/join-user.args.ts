import { ArgsType, Field } from "@nestjs/graphql";
import { Length, IsEmail } from "class-validator";

@ArgsType()
export class JoinUserArgs {
	@Field()
	@IsEmail()
	email: string;

	@Field() password: string;
}
