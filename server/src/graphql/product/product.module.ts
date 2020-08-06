import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { ProductResolver } from "./product.resolver";
import { CategoryModule } from "../category/category.module";
import { ProductInfoModule } from "./product-info/product-info.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([ProductEntity]),
		CategoryModule,
		ProductInfoModule
	],
	exports: [ProductService],
	providers: [ProductService, ProductResolver]
})
export class ProductModule {}
