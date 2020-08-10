import { Module, forwardRef } from "@nestjs/common";
import { ProductInfoService } from "./product-info.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductInfoEntity } from "./product-info.entity";
import { ProductInfoResolver } from "./product-info.resolver";
import { CategoryModule } from "../../category/category.module";
import { ProductFieldModule } from "./product-field/product-field.module";
import { ProductModule } from "../product.module";
import { LanguageModule } from "src/config/language/language.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([ProductInfoEntity]),
		CategoryModule,
		ProductFieldModule,
		LanguageModule,
		forwardRef(() => ProductModule)
	],
	exports: [ProductInfoService],
	providers: [ProductInfoService, ProductInfoResolver]
})
export class ProductInfoModule {}
