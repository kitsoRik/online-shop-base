import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "../guards/roles.guard";
import { UserRoleEnum } from "../user-role.enum";

export const AccessAdmin = (): MethodDecorator => {
	return applyDecorators(UseGuards(new RolesGuard([UserRoleEnum.Admin])));
};
