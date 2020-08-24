import { Module } from "@nestjs/common";
import { FilterGroupResolver } from "./filter-group.resolver";
import { FilterGroupService } from "./filter-group.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilterGroupEntity } from "./filter-group.entity";
import { FilterEntity } from "../filter.entity";
import { FilterFieldEntity } from "./filter-field/filter-field.entity";
import { FilterGroupType } from "./filter-group.type";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			FilterGroupEntity,
			FilterEntity,
			FilterFieldEntity
		])
	],
	providers: [FilterGroupResolver, FilterGroupService]
})
export class FilterGroupModule {}
