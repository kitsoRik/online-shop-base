import { Module, forwardRef } from "@nestjs/common";
import { CategoryFieldType } from "./category-field.type";
import { CategoryFieldInput } from "./category-field.input";
import { CategoryFieldService } from "./category-field.service";
import { CategoryFieldResolver } from "./category-field.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryFieldEntity } from "./category-field.entity";
import { CategoryModule } from "../category.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([CategoryFieldEntity]),
		forwardRef(() => CategoryModule)
	],
	exports: [CategoryFieldService],
	providers: [
		CategoryFieldType,
		CategoryFieldInput,
		CategoryFieldResolver,
		CategoryFieldService
	]
})
export class CategoryFieldModule {}
