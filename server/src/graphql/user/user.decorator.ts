import { createParamDecorator, Inject } from "@nestjs/common";
import { Request } from "express";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { SessionService } from "./session/session.service";
import { UserService } from "./user.service";

export const User = createParamDecorator(
	async (data: any, ctx: ExecutionContextHost) => {
		const req: Request = ctx.getArgs()[2].req;

		const { sesid } = req.cookies;
		const userService: UserService = (global as any).services.user;
		const sessionService: SessionService = (global as any).services.session;

		const session = await sessionService.getSessionBySessionId(sesid);

		if (!session) return null;

		const user = await userService.getUserById(session.userId);

		return user;
	}
);
