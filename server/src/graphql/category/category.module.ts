import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryEntity } from "./category.entity";
import { CategoryResolver } from "./category.resolver";
import { CategoryInfoModule } from "./product-info/category-info.module";
import { CategoryFieldModule } from "./category-field/category-field.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([CategoryEntity]),
		CategoryFieldModule,
		CategoryInfoModule
	],
	exports: [CategoryService],
	providers: [CategoryResolver, CategoryService]
})
export class CategoryModule {}
