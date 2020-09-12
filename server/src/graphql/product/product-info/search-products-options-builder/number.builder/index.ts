import { FilterFieldEntity } from "src/graphql/category/filter/filter-group/filter-field/filter-field.entity";
import { SelectQueryBuilder } from "typeorm";
import { ProductInfoEntity } from "../../product-info.entity";
import { sliderBuilder } from "./slider.builder";
import { enumBuilder, isNeedEnumBuilder } from "./enum.builder";

export const numberBuilder = (
	filterField: FilterFieldEntity,
	optionValue: any,
	query: SelectQueryBuilder<ProductInfoEntity>,
	join: (query: SelectQueryBuilder<ProductInfoEntity>) => void
) => {
	if (filterField.type === "slider" || filterField.type === "spin") {
		join(query);
		sliderBuilder(query, optionValue);
	}

	if (filterField.type === "enum" && isNeedEnumBuilder(optionValue)) {
		join(query);
		enumBuilder(query, optionValue);
	}
};
