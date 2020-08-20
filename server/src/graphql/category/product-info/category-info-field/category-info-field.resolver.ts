import {
	Resolver,
	Mutation,
	Args,
	Int,
	ResolveField,
	Parent
} from "@nestjs/graphql";
import { CategoryInfoFieldType } from "./category-info-field.type";
import { AccessAdmin } from "src/graphql/user/decorators/access-admin.decorator";
import { CategoryInfoFieldService } from "./category-info-field.service";
import { CategoryFieldService } from "../../category-field/category-field.service";
import { CategoryFieldType } from "../../category-field/category-field.type";
import { CategoryService } from "../../category.service";
import { CategoryInfoFieldChangeInput } from "./category-info-field-change.input";

@Resolver(() => CategoryInfoFieldType)
export class CategoryInfoFieldResolver {
	constructor(
		private categoryInfoFieldService: CategoryInfoFieldService,
		private categoryFieldService: CategoryFieldService,
		private categoryService: CategoryService
	) {}

	@Mutation(type => CategoryInfoFieldType)
	@AccessAdmin()
	changeFieldInCategoryInfo(
		@Args("fieldId", { type: () => Int }) fieldId: number,
		@Args("change") change: CategoryInfoFieldChangeInput
	) {
		return this.categoryInfoFieldService.changeField(fieldId, change);
	}

	@Mutation(type => CategoryInfoFieldType)
	@AccessAdmin()
	async initializeCategoryInfoField(
		@Args("categoryInfoId", { type: () => Int })
		categoryInfoId: number,
		@Args("categoryFieldId", { type: () => Int })
		categoryFieldId: number
	) {
		const field = await this.categoryInfoFieldService.initField(
			categoryInfoId,
			categoryFieldId
		);

		return field;
	}

	@ResolveField(type => CategoryFieldType)
	categoryField(@Parent() parent: { categoryFieldId: number }) {
		return this.categoryFieldService.getField(parent.categoryFieldId);
	}
}
