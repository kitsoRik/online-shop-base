import { Module, forwardRef } from "@nestjs/common";
import { ProductInfoService } from "./product-info.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductInfoEntity } from "./product-info.entity";
import { ProductInfoResolver } from "./product-info.resolver";
import { CategoryModule } from "../../category/category.module";
import { ProductInfoFieldModule } from "./product-info-field/product-info-field.module";
import { ProductModule } from "../product.module";
import { LanguageModule } from "src/config/language/language.module";
import { ProductInfoFieldEntity } from "./product-info-field/product-info-field.entity";
import { CategoryEntity } from "src/graphql/category/category.entity";

@Module({
	imports: [
		TypeOrmModule.forFeature([ProductInfoEntity, ProductInfoFieldEntity, CategoryEntity]),
		CategoryModule,
		ProductInfoFieldModule,
		LanguageModule,
		forwardRef(() => ProductModule)
	],
	exports: [ProductInfoService],
	providers: [ProductInfoService, ProductInfoResolver]
})
export class ProductInfoModule {}
