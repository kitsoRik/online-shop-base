import { SelectQueryBuilder } from "typeorm";
import { ProductInfoEntity } from "../../product-info.entity";

export const enumBuilder = (
	query: SelectQueryBuilder<ProductInfoEntity>,
	values: { [value: number]: boolean }
) => {
	query.andWhere("filters_values.value::float IN (:...values)", {
		values: Object.keys(values)
			.filter(key => !!values[key])
			.map(v => parseFloat(v))
	});
};

export const isNeedEnumBuilder = (values: { [value: number]: boolean }) => {
	return Object.keys(values).filter(k => !!values[k]).length !== 0;
};
