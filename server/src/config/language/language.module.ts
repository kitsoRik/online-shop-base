import { Module } from "@nestjs/common";
import { LanguageService } from "./language.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LanguageEntity } from "./language.entity";
import { ConfigEntity } from "../config.entity";

@Module({
	imports: [TypeOrmModule.forFeature([LanguageEntity])],
	exports: [LanguageService],
	providers: [LanguageService]
})
export class LanguageModule {}
