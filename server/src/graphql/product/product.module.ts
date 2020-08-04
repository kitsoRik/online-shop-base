import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { ProductResolver } from "./product.resolver";
import { CategoryModule } from "../category/category.module";
import { ProductFieldModule } from './product-field/product-field.module';

@Module({
	imports: [TypeOrmModule.forFeature([ProductEntity]), CategoryModule, ProductFieldModule],
	providers: [ProductService, ProductResolver]
})
export class ProductModule {}
