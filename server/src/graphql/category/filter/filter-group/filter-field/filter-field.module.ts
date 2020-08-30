import { Module, forwardRef } from "@nestjs/common";
import { FilterFieldService } from "./filter-field.service";
import { FilterFieldResolver } from "./filter-field.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilterFieldEntity } from "./filter-field.entity";
import { CategoryEntity } from "../../../category.entity";
import { FilterFieldType } from "./filter-field.type";
import { CategoryModule } from "../../../category.module";
import { CategoryFieldEntity } from "src/graphql/category/category-field/category-field.entity";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			FilterFieldEntity,
			CategoryEntity,
			CategoryFieldEntity
		]),
		forwardRef(() => CategoryModule)
	],
	providers: [FilterFieldService, FilterFieldResolver, FilterFieldType]
})
export class FilterFieldModule {}
