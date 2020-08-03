import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UserType } from "./user.type";
import { UserService } from "./user.service";

@Resolver(of => UserType)
export class UserResolver {
	constructor(private userService: UserService) {}

	@Query(returns => UserType)
	user(): UserType {
		return {
			id: 123,
			email: "my@gmail.com"
		};
	}

	@Mutation(returns => UserType)
	async createUser(@Args("email") email: string) {
		return await this.userService.createUser(email);
	}
}
