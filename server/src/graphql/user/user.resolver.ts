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
import { ValidationPipe, Req, Res } from "@nestjs/common";
import { GraphQLError } from "graphql";
import { Response } from "express";
import { User } from "./user.decorator";

@Resolver(of => UserType)
export class UserResolver {
	constructor(private userService: UserService) {}

	@Query(returns => UserType, { nullable: true })
	async currentUser(@User() user) {
		return user;
	}

	@Mutation(returns => UserType)
	async joinUser(
		@Args("email") email: string,
		@Args("password") password: string,
		@Args("remember") remember: boolean,
		@Res() { req: { res } }: { req: { res: Response } }
	) {
		const [user, session] = await this.userService.joinUser(
			email,
			password,
			remember
		);

		if (!remember) return user;
		console.log(res);
		console.log(session);
		res.cookie("sesid", session.id);

		return user;
	}

	@Mutation(returns => Boolean)
	async leaveUser(@Res() { req: { res } }: { req: { res: Response } }) {
		res.clearCookie("sesid");
		return true;
	}

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
		try {
			return await this.userService.createUser(
				email,
				password,
				firstName,
				lastName,
				middleName,
				phone
			);
		} catch (e) {
			if (e.code) {
				switch (e.code) {
					case "23505":
						throw new GraphQLError("EMAIL_IS_BUSY");
				}
			}
		}
	}
}
