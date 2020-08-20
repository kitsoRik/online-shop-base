import { Module, forwardRef } from "@nestjs/common";
import { CategoryInfoFielddInput } from "./category-info-field.input";
import { CategoryInfoFieldType } from "./category-info-field.type";
import { CategoryInfoFieldResolver } from "./category-info-field.resolver";
import { CategoryInfoFieldService } from "./category-info-field.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryInfoFieldEntity } from "./category-info-field.entity";
import { CategoryFieldModule } from "../../category-field/category-field.module";
import { CategoryService } from "../../category.service";
import { CategoryModule } from "../../category.module";
import { CategoryInfoFieldChangeInput } from "./category-info-field-change.input";

@Module({
	imports: [
		TypeOrmModule.forFeature([CategoryInfoFieldEntity]),
		CategoryFieldModule,
		forwardRef(() => CategoryModule)
	],
	exports: [CategoryInfoFieldService, CategoryInfoFieldType],
	providers: [
		CategoryInfoFieldType,
		CategoryInfoFielddInput,
		CategoryInfoFieldChangeInput,
		CategoryInfoFieldResolver,
		CategoryInfoFieldService
	]
})
export class CategoryInfoFieldModule {}
