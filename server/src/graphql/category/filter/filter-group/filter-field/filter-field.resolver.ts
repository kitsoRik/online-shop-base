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
import { CategoryFieldType } from "src/graphql/category/category-field/category-field.type";
import { CategoryFieldEntity } from "src/graphql/category/category-field/category-field.entity";
import { FilterFieldChangeInput } from "./filter-field-change.input";

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
		@Args("change") change: FilterFieldChangeInput
	) {
		return this.filterFieldService.changeField(fieldId, change);
	}

	@ResolveField(type => CategoryFieldType, { nullable: true })
	categoryField(@Parent() parent: FilterFieldEntity) {
		return this.filterFieldService.getCategoryField(parent.categoryFieldId);
	}
}
