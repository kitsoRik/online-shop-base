import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserService } from "../user.service";
import { UserRoleEnum } from "../user-role.enum";
import { SessionService } from "../session/session.service";
import { GraphQLError } from "graphql";
import { Request } from "express";

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private roles: UserRoleEnum[]) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		if (!this.roles) {
			return true;
		}
		const req: Request = context.getArgByIndex(2).req;

		const { sesid } = req.cookies;

		const userService: UserService = (global as any).services.user;
		const sessionService: SessionService = (global as any).services.session;

		const session = await sessionService.getSessionBySessionId(sesid);

		if (!session) throw new GraphQLError("NO_ACCESS");

		const user = await userService.getUserById(session.userId);

		return this.matchRoles(this.roles, user.role);
	}

	matchRoles(roles: UserRoleEnum[], userRole: UserRoleEnum) {
		return roles.includes(userRole);
	}
}
