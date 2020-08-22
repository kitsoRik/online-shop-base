import { Module, forwardRef } from "@nestjs/common";
import { FilterFieldService } from "./filter-field.service";
import { FilterFieldResolver } from "./filter-field.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilterFieldEntity } from "./filter-field.entity";
import { CategoryEntity } from "../../category.entity";
import { FilterFieldType } from "./filter-field.type";
import { CategoryModule } from "../../category.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([FilterFieldEntity, CategoryEntity]),
		forwardRef(() => CategoryModule)
	],
	providers: [FilterFieldService, FilterFieldResolver, FilterFieldType]
})
export class FilterFieldModule {}
