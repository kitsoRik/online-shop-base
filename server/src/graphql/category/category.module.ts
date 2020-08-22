import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryEntity } from "./category.entity";
import { CategoryResolver } from "./category.resolver";
import { CategoryInfoModule } from "./product-info/category-info.module";
import { CategoryFieldModule } from "./category-field/category-field.module";
import { CategoryFieldEntity } from "./category-field/category-field.entity";
import { FilterModule } from "./filter/filter.module";
import { CategoryType } from "./category.type";
import { FilterEntity } from "./filter/filter.entity";

@Module({
	imports: [
		TypeOrmModule.forFeature([CategoryEntity, FilterEntity]),
		CategoryFieldModule,
		CategoryInfoModule,
		FilterModule
	],
	exports: [CategoryService, CategoryType],
	providers: [CategoryResolver, CategoryService, CategoryType]
})
export class CategoryModule {}
