import {
	Resolver,
	Query,
	Mutation,
	Args,
	Context,
	ResolveField
} from "@nestjs/graphql";
import { UserType } from "./user.type";
import { UserService } from "./user.service";
import { CreateUserArgs } from "./dto/create-user.args";
import { JoinUserArgs } from "./dto/join-user.args";
import { ValidationPipe } from "@nestjs/common";

@Resolver(of => UserType)
export class UserResolver {
	constructor(private userService: UserService) {}

	@Mutation(returns => UserType)
	async createUser(@Args() args: CreateUserArgs) {
		const {
			email,
			firstName,
			lastName,
			middleName,
			password,
			phone
		} = args;

		return await this.userService.createUser(
			email,
			password,
			firstName,
			lastName,
			middleName,
			phone
		);
	}

	@ResolveField(returns => UserType)
	async joinUser(@Args() args: JoinUserArgs) {
		const { password, email } = args;

		return await this.userService.joinUser(email, password);
	}

	@Query(returns => UserType)
	async authUser(@Context() context) {
		console.log(context);
		return await this.userService.authUser("1");
	}
}
