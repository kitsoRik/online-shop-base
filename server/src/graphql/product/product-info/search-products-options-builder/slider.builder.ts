export const sliderBuilder = (query: any, [min, max]: [number, number]) => {
	query.andWhere("filters_values.value::float >= :min", { min });
	query.andWhere("filters_values.value::float <= :max", { max });
};
