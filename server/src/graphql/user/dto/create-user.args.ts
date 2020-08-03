import { ArgsType, Field } from "@nestjs/graphql";
import { Length } from "class-validator";

@ArgsType()
export class CreateUserArgs {
	@Field() email: string;

	@Field() password: string;

	@Field() firstName: string;

	@Field() lastName: string;

	@Field({ defaultValue: "" }) middleName: string;

	@Field({ defaultValue: "" })
	@Length(12, 12)
	phone: string;
}
