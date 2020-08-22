import { Resolver, ResolveField, Parent } from "@nestjs/graphql";
import { CategoryType } from "../../category.type";
import { FilterFieldEntity } from "./filter-field.entity";
import { FilterFieldService } from "./filter-field.service";
import { FilterFieldType } from "./filter-field.type";

@Resolver(type => FilterFieldType)
export class FilterFieldResolver {
	constructor(private filterFieldService: FilterFieldService) {}
}
