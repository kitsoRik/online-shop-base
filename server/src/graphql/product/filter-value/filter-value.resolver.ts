import {
	Resolver,
	ResolveField,
	Parent,
	Mutation,
	Args,
	Int
} from "@nestjs/graphql";
import { ProductType } from "../product.type";
import { FilterValueEntity } from "./filter-value.entity";
import { FilterValueService } from "./filter-value.service";
import { FilterValueType } from "./filter-value.type";
import { FilterFieldType } from "src/graphql/category/filter/filter-group/filter-field/filter-field.type";
import { AccessAdmin } from "src/graphql/user/decorators/access-admin.decorator";

@Resolver(() => FilterValueType)
export class FilterValueResolver {
	constructor(private filterValueService: FilterValueService) {}

	@Mutation(type => FilterValueType)
	@AccessAdmin()
	initializeFilterValue(
		@Args("value") value: string,
		@Args("productId", { type: () => Int }) productId: number,
		@Args("filterFieldId") filterFieldId: string
	) {
		return this.filterValueService.initializeFilterValue(
			value,
			productId,
			filterFieldId
		);
	}

	@ResolveField(type => ProductType)
	product(@Parent() parent: FilterValueEntity) {
		return this.filterValueService.getProduct(parent.productId);
	}

	@ResolveField(type => FilterFieldType)
	filterField(@Parent() parent: FilterValueEntity) {
		return this.filterValueService.getFilterField(parent.filterFieldId);
	}
}
