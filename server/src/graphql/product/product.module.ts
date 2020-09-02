import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { ProductResolver } from "./product.resolver";
import { CategoryModule } from "../category/category.module";
import { ProductInfoModule } from "./product-info/product-info.module";
import { ProductInfoEntity } from "./product-info/product-info.entity";
import { FilterValueModule } from "./filter-value/filter-value.module";
import { FilterValueEntity } from "./filter-value/filter-value.entity";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			ProductEntity,
			ProductInfoEntity,
			FilterValueEntity
		]),
		CategoryModule,
		ProductInfoModule,
		FilterValueModule
	],
	exports: [ProductService],
	providers: [ProductService, ProductResolver]
})
export class ProductModule {}
