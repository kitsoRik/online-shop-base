import { Resolver, ResolveField, Parent } from "@nestjs/graphql";
import { FilterFieldType } from "./filter-field/filter-field.type";
import { FilterType } from "./filter.type";
import { CategoryType } from "../category.type";
import { FilterEntity } from "./filter.entity";
import { FilterService } from "./filter.service";

@Resolver(() => FilterType)
export class FilterResolver {
	constructor(private filterService: FilterService) {}

	@ResolveField(type => CategoryType)
	category(@Parent() parent: FilterEntity) {
		return this.filterService.getCategory(parent.categoryId);
	}

	@ResolveField(type => [FilterFieldType])
	fields(@Parent() parent: { categoryId: number }) {
		return [];
	}
}
