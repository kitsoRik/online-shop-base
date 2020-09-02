import { Resolver, ResolveField, Parent } from "@nestjs/graphql";
import { ProductType } from "../product.type";
import { FilterValueEntity } from "./filter-value.entity";
import { FilterValueService } from "./filter-value.service";
import { FilterValueType } from "./filter-value.type";

@Resolver(() => FilterValueType)
export class FilterValueResolver {
	constructor(private filterValueService: FilterValueService) {}

	@ResolveField(type => ProductType)
	product(@Parent() parent: FilterValueEntity) {
		return this.filterValueService.getProduct(parent.productId);
	}

	@ResolveField(type => ProductType)
	filterField(@Parent() parent: FilterValueEntity) {
		return this.filterValueService.getFilterField(parent.filterFieldId);
	}
}
