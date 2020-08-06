import { Module } from "@nestjs/common";
import { ProductFieldInput } from "./product-field.input";
import { ProductFieldType } from "./product-field.type";

@Module({
	providers: [ProductFieldType, ProductFieldInput]
})
export class ProductFieldModule {}
