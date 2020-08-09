import { Module } from "@nestjs/common";
import { LanguageService } from "./language.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LanguageEntity } from "./language.entity";
import { LanguageResolver } from "./language.resolver";

@Module({
	imports: [TypeOrmModule.forFeature([LanguageEntity])],
	providers: [LanguageService, LanguageResolver]
})
export class LanguageModule {}
