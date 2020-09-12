import { ProductInfoEntity } from "../product-info.entity";
import { FilterFieldEntity } from "src/graphql/category/filter/filter-group/filter-field/filter-field.entity";
import { SelectQueryBuilder, Repository } from "typeorm";
import { sliderBuilder } from "./number.builder/slider.builder";
import { CategoryFieldEntity } from "src/graphql/category/category-field/category-field.entity";
import { numberBuilder } from "./number.builder";

export const searchProductOptionsBuilder = async (
	options: object = {},
	query: SelectQueryBuilder<ProductInfoEntity>,
	filterFieldRepository: Repository<FilterFieldEntity>,
	categoryFieldRepository: Repository<CategoryFieldEntity>
) => {
	if (Object.keys(options).length > 0) {
		const optionsKeys = Object.keys(options);

		const joinFactory = () => {
			let joined = false;
			return (query: SelectQueryBuilder<ProductInfoEntity>) => {
				if (joined) return;
				joined = true;
				query.innerJoin(
					"filters_values",
					"filters_values",
					"products_info.product_id = filters_values.product_id"
				);
			};
		};

		const join = joinFactory();

		await Promise.all(
			optionsKeys.map(async optionKey => {
				const optionValue = options[optionKey];
				const filterField = await filterFieldRepository.findOne(
					optionKey
				);
				const categoryField = await categoryFieldRepository.findOne({
					id: filterField.categoryFieldId
				});

				if (categoryField.type === "number") {
					numberBuilder(filterField, optionValue, query, join);
				}
			})
		);
	}
};
