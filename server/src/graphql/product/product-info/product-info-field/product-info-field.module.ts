import { Module, forwardRef } from "@nestjs/common";
import { ProductInfoFieldInput } from "./product-info-field.input";
import { ProductInfoFieldType } from "./product-info-field.type";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductInfoFieldEntity } from "./product-info-field.entity";
import { ProductInfoFieldService } from "./product-info-field.service";
import { ProductInfoFieldResolver } from "./product-info-field.resolver";
import { CategoryInfoFieldEntity } from "src/graphql/category/product-info/category-info-field/category-info-field.entity";
import { ProductInfoFieldChangeInput } from "./dto/product-info-field-change.input";
import { CategoryInfoFieldModule } from "src/graphql/category/product-info/category-info-field/category-info-field.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			ProductInfoFieldEntity,
			CategoryInfoFieldEntity
		]),
		CategoryInfoFieldModule
	],
	exports: [ProductInfoFieldService],
	providers: [
		ProductInfoFieldType,
		ProductInfoFieldInput,
		ProductInfoFieldChangeInput,
		ProductInfoFieldService,
		ProductInfoFieldResolver
	]
})
export class ProductInfoFieldModule {}
