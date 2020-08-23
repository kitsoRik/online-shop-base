import { Module } from "@nestjs/common";
import { FilterGroupResolver } from "./filter-group.resolver";
import { FilterGroupService } from "./filter-group.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilterGroupEntity } from "./filter-group.entity";

@Module({
	imports: [TypeOrmModule.forFeature([FilterGroupEntity])],
	providers: [FilterGroupResolver, FilterGroupService]
})
export class FilterGroupModule {}
