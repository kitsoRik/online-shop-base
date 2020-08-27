import { Module } from "@nestjs/common";
import { StaticController } from "./static.controller";
import { StaticService } from "./static.service";
import { LanguageModule } from "src/config/language/language.module";

@Module({
	imports: [LanguageModule],
	controllers: [StaticController],
	providers: [StaticService]
})
export class StaticModule {}
