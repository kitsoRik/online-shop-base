import { Resolver, Mutation, Args, Int } from "@nestjs/graphql";
import { FilterType } from "../filter.type";
import { AccessAdmin } from "src/graphql/user/decorators/access-admin.decorator";
import { FilterGroupService } from "./filter-group.service";

@Resolver("FilterGroup")
export class FilterGroupResolver {
	constructor(private filterGroupService: FilterGroupService) {}

	@Mutation(type => FilterType)
	@AccessAdmin()
	addFilterGroup(
		@Args("filterId", { type: () => Int }) filterId: number,
		@Args("name") name: string
	) {
        return this.filterGroupService.addFilterGroup(filterId, name);
    }
}
