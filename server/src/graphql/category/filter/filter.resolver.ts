import {
	Resolver,
	ResolveField,
	Parent,
	Mutation,
	Args,
	Int
} from "@nestjs/graphql";
import { FilterFieldType } from "./filter-group/filter-field/filter-field.type";
import { FilterType } from "./filter.type";
import { CategoryType } from "../category.type";
import { FilterEntity } from "./filter.entity";
import { FilterService } from "./filter.service";
import { AccessAdmin } from "src/graphql/user/decorators/access-admin.decorator";
import { FilterGroupType } from "./filter-group/filter-group.type";
import { Query } from "@nestjs/common";

@Resolver(() => FilterType)
export class FilterResolver {
	constructor(private filterService: FilterService) {}

	@Mutation(type => CategoryType)
	@AccessAdmin()
	async initializeCategoryFilter(
		@Args("categoryId", { type: () => Int }) categoryId: number
	) {
		await this.filterService.initializeFilter(categoryId);

		return this.filterService.getCategory(categoryId);
	}

	@ResolveField(type => CategoryType)
	category(@Parent() parent: FilterEntity) {
		return this.filterService.getCategory(parent.categoryId);
	}

	@ResolveField(type => [FilterGroupType])
	groups(@Parent() parent: FilterEntity) {
		return this.filterService.getGroups(parent.id);
	}
}
