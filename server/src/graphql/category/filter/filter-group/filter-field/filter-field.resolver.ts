import {
	Resolver,
	ResolveField,
	Parent,
	Mutation,
	Args
} from "@nestjs/graphql";
import { CategoryType } from "../../../category.type";
import { FilterFieldEntity } from "./filter-field.entity";
import { FilterFieldService } from "./filter-field.service";
import { FilterFieldType } from "./filter-field.type";
import { AccessAdmin } from "src/graphql/user/decorators/access-admin.decorator";

@Resolver(type => FilterFieldType)
export class FilterFieldResolver {
	constructor(private filterFieldService: FilterFieldService) {}

	@Mutation(type => FilterFieldType)
	@AccessAdmin()
	addFieldToFilterGroup(
		@Args("filterGroupId") filterGroupId: string,
		@Args("name") name: string
	) {
		return this.filterFieldService.addFieldToFilterGroup(
			filterGroupId,
			name
		);
	}

	@Mutation(type => FilterFieldType)
	@AccessAdmin()
	changeFilterGroupField(
		@Args("fieldId") fieldId: string,
		@Args("name") name: string,
		@Args("type") type: string
	) {
		return this.filterFieldService.changeField(fieldId, name, type);
	}
}
