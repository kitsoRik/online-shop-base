import { ProductInfoEntity } from "../product-info.entity";
import { FilterFieldEntity } from "src/graphql/category/filter/filter-group/filter-field/filter-field.entity";
import { SelectQueryBuilder, Repository } from "typeorm";
import { sliderBuilder } from "./slider.builder";

export const searchProductOptionsBuilder = async (
	options: object = {},
	query: SelectQueryBuilder<ProductInfoEntity>,
	filterFieldRepository: Repository<FilterFieldEntity>
) => {
	if (Object.keys(options).length > 0) {
		const optionsKeys = Object.keys(options);

		const join = (query: SelectQueryBuilder<ProductInfoEntity>) =>
			query.innerJoin(
				"filters_values",
				"filters_values",
				"products_info.product_id = filters_values.product_id"
			);

		await Promise.all(
			optionsKeys.map(async optionKey => {
				const optionValue = options[optionKey];
				const filterField = await filterFieldRepository.findOne(
					optionKey
				);

				if (filterField.type === "slider") {
					join(query);
					sliderBuilder(query, optionValue);
				}
			})
		);
	}
};
