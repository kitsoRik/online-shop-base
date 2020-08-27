import {
	Resolver,
	Mutation,
	Query,
	Args,
	ResolveField,
	Parent
} from "@nestjs/graphql";
import { SearchType } from "./search.type";
import { CategoryType } from "../category/category.type";

@Resolver(of => SearchType)
export class SearchResolver {
	@Query(type => SearchType)
	search(@Args("query") query: string) {
		return { query };
	}

	@ResolveField(type => [CategoryType])
	categories(@Parent() parent: SearchType) {
		console.log(parent);
		return [];
	}
}
