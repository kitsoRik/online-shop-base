import { Module } from "@nestjs/common";
import { ConfigService } from "./config.service";
import { LanguageModule } from "./language/language.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigEntity } from "./config.entity";

@Module({
	imports: [LanguageModule, TypeOrmModule.forFeature([ConfigEntity])],
	providers: [ConfigService]
})
export class ConfigModule {}
