import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryEntity } from "./category.entity";
import { CategoryResolver } from "./category.resolver";
import { CategoryFieldModule } from "./category-field/category-field.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([CategoryEntity]),
		CategoryFieldModule,
		CategoryFieldModule
	],
	providers: [CategoryResolver, CategoryService]
})
export class CategoryModule {}
