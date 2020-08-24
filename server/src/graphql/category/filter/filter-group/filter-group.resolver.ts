import {
	Resolver,
	Mutation,
	Args,
	Int,
	ResolveField,
	Parent
} from "@nestjs/graphql";
import { FilterType } from "../filter.type";
import { AccessAdmin } from "src/graphql/user/decorators/access-admin.decorator";
import { FilterGroupService } from "./filter-group.service";
import { FilterGroupEntity } from "./filter-group.entity";
import { FilterFieldType } from "./filter-field/filter-field.type";
import { FilterGroupType } from "./filter-group.type";
import { FilterGroupChangeInput } from "./filter-group-change.input";

@Resolver(() => FilterGroupType)
export class FilterGroupResolver {
	constructor(private filterGroupService: FilterGroupService) {}

	@Mutation(type => FilterType)
	@AccessAdmin()
	async addFilterGroup(
		@Args("filterId", { type: () => Int }) filterId: number,
		@Args("name") name: string
	) {
		await this.filterGroupService.addFilterGroup(filterId, name);
		return this.filterGroupService.getFilter(filterId);
	}

	@Mutation(type => FilterType)
	@AccessAdmin()
	async changeFilterGroup(
		@Args("filterGroupId") filterGroupId: string,
		@Args("change") change: FilterGroupChangeInput
	) {
		const g = await this.filterGroupService.changeFilterGroup(
			filterGroupId,
			change
		);

		return await this.filterGroupService.getFilter(g.filterId);
	}

	@ResolveField(type => FilterType)
	filter(@Parent() parent: FilterGroupEntity) {
		return this.filterGroupService.getFilter(parent.filterId);
	}

	@ResolveField(type => [FilterFieldType])
	fields(@Parent() parent: FilterGroupEntity) {
		return this.filterGroupService.getFields(parent.id);
	}
}
