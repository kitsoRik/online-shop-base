import { Module } from "@nestjs/common";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { SessionService } from "./session/session.service";
import { SessionEntity } from "./session/session.entity";

@Module({
	imports: [TypeOrmModule.forFeature([SessionEntity, UserEntity])],
	providers: [UserResolver, UserService, SessionService]
})
export class UserModule {}
