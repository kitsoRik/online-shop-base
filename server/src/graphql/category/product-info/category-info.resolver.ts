import {
	Resolver,
	Mutation,
	Query,
	Args,
	Int,
	ResolveField,
	Info,
	Parent
} from "@nestjs/graphql";
import { AccessAdmin } from "../../user/decorators/access-admin.decorator";
import { CategoryInfoService } from "./category-info.service";
import { CategoryInfoType } from "./category-info.type";
import {
	CategoryInfoInput,
	ChangeCategoryInfoInput
} from "./category-info.input";
import { CategoryInfoFielddInput } from "./category-info-field/category-info-field.input";
import { CategoryService } from "../category.service";
import { CategoryType } from "../category.type";
import { LanguageService } from "src/config/language/language.service";
import { CategoryInfoEntity } from "./category-info.entity";

@Resolver(of => CategoryInfoType)
export class CategoryInfoResolver {
	constructor(
		private categoryInfoService: CategoryInfoService,
		private categoryService: CategoryService,
		private languageService: LanguageService
	) {}

	@Mutation(type => CategoryType)
	@AccessAdmin()
	async addCategoryInfoToCategory(
		@Args("categoryId", { type: () => Int }) categoryId: number,
		@Args("language", { type: () => Int }) language: number
	) {
		await this.categoryInfoService.addCategoryInfo(categoryId, language);
		return this.categoryService.findById(categoryId);
	}

	@Mutation(type => CategoryType)
	@AccessAdmin()
	async removeInfoFromCategory(
		@Args("categoryId", { type: () => Int }) categoryId: number,
		@Args("infoId", { type: () => Int }) infoId: number
	) {
		await this.categoryInfoService.removeCategoryInfo(categoryId, infoId);
		return this.categoryService.findById(categoryId);
	}

	@Mutation(type => CategoryInfoType)
	@AccessAdmin()
	changeCategoryInfo(
		@Args("id", { type: () => Int }) id: number,
		@Args("infoId", { type: () => Int }) infoId: number,
		@Args("change") change: ChangeCategoryInfoInput
	) {
		return this.categoryInfoService.changeCategoryInfo(id, change);
	}

	@ResolveField(type => CategoryInfoType)
	category(@Parent() { categoryId }: CategoryInfoEntity) {
		return this.categoryService.findById(categoryId);
	}

	@ResolveField(type => CategoryInfoType)
	fields(
		@Parent() { id }: { id: number },
		@Args("filter", { nullable: true }) filter: CategoryInfoFielddInput
	) {
		return this.categoryInfoService.getFields(id, filter);
	}

	@ResolveField(type => CategoryInfoType)
	language(@Parent() parent: CategoryInfoEntity) {
		return this.languageService.getLanguageById(parent.languageId);
	}

	@Query(type => [CategoryInfoType])
	findCategoryInfoByNameTemplate(
		@Args("template", { nullable: true, defaultValue: "" }) template: string
	) {
		return this.categoryInfoService.findByNameTemplate(template);
	}
}
