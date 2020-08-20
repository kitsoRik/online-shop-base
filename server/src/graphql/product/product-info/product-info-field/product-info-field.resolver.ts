import {
	Resolver,
	Mutation,
	Args,
	Int,
	ResolveField,
	Parent
} from "@nestjs/graphql";
import { AccessAdmin } from "src/graphql/user/decorators/access-admin.decorator";
import { ProductInfoFieldType } from "./product-info-field.type";
import { ProductInfoFieldService } from "./product-info-field.service";
import { ProductInfoFieldChangeInput } from "./dto/product-info-field-change.input";
import { CategoryInfoFieldType } from "src/graphql/category/product-info/category-info-field/category-info-field.type";
import { CategoryInfoFieldEntity } from "src/graphql/category/product-info/category-info-field/category-info-field.entity";
import { ProductInfoFieldEntity } from "./product-info-field.entity";

@Resolver(() => ProductInfoFieldType)
export class ProductInfoFieldResolver {
	constructor(private productInfoFieldService: ProductInfoFieldService) {}

	@Mutation(type => ProductInfoFieldType)
	@AccessAdmin()
	addFieldToProductInfo(
		@Args("productInfoId", { type: () => Int }) productInfoId: number,
		@Args("categoryInfoFieldId", { type: () => Int, nullable: true })
		categoryInfoFieldId: number,
		@Args("label", { nullable: true }) label: string,
		@Args("value") value: string
	) {
		return this.productInfoFieldService.addField(
			productInfoId,
			label,
			value,
			categoryInfoFieldId
		);
	}

	@Mutation(type => ProductInfoFieldType)
	changeFieldInProductInfo(
		@Args("id", { type: () => Int, nullable: true }) id: number,
		@Args("change") change: ProductInfoFieldChangeInput
	) {
		return this.productInfoFieldService.changeField(id, change);
	}

	@ResolveField(type => CategoryInfoFieldType, { nullable: true })
	categoryInfoField(@Parent() parent: ProductInfoFieldEntity) {
		return this.productInfoFieldService.getCategoryInfoField(
			parent.categoryInfoFieldId
		);
	}
}
