import { Module } from "@nestjs/common";
import { CategoryInfoFielddInput } from "./category-info-field.input";
import { CategoryInfoFieldType } from "./category-info-field.type";

@Module({
	providers: [CategoryInfoFieldType, CategoryInfoFielddInput]
})
export class CategoryInfoFieldModule {}
