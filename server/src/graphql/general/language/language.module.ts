import { Module } from "@nestjs/common";
import { LanguageResolver } from "./language.resolver";
import { LanguageModule as ConfigLanguageModule } from "src/config/language/language.module";

@Module({
	imports: [ConfigLanguageModule],
	providers: [LanguageResolver]
})
export class LanguageModule {}
