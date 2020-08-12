import { Module, forwardRef } from "@nestjs/common";
import { CategoryInfoService } from "./category-info.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryInfoEntity } from "./category-info.entity";
import { CategoryInfoResolver } from "./category-info.resolver";
import { CategoryModule } from "../category.module";
import { CategoryInfoFieldModule } from "./category-info-field/category-info-field.module";
import { LanguageModule } from "src/config/language/language.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([CategoryInfoEntity]),
		CategoryInfoFieldModule,
		LanguageModule,
		forwardRef(() => CategoryModule)
	],
	exports: [CategoryInfoService],
	providers: [CategoryInfoService, CategoryInfoResolver]
})
export class CategoryInfoModule {}
