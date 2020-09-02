import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilterValueEntity } from "./filter-value.entity";
import { FilterValueResolver } from "./filter-value.resolver";
import { FilterValueService } from "./filter-value.service";
import { ProductEntity } from "../product.entity";
import { FilterFieldEntity } from "src/graphql/category/filter/filter-group/filter-field/filter-field.entity";
import { FilterValueType } from "./filter-value.type";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			FilterValueEntity,
			ProductEntity,
			FilterFieldEntity
		])
	],
	providers: [FilterValueResolver, FilterValueService, FilterValueType]
})
export class FilterValueModule {}
