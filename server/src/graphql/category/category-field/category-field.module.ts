import { Module } from "@nestjs/common";
import { CategoryFieldType } from "./category-field.type";
import { CategoryFieldInput } from "./category-field.input";

@Module({
	providers: [CategoryFieldType, CategoryFieldInput]
})
export class CategoryFieldModule {}
