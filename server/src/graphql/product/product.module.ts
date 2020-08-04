import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { ProductResolver } from "./product.resolver";
import { CategoryModule } from "../category/category.module";

@Module({
	imports: [TypeOrmModule.forFeature([ProductEntity]), CategoryModule],
	providers: [ProductService, ProductResolver]
})
export class ProductModule {}
