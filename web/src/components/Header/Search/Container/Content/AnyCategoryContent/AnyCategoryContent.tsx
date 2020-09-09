import React from "react";
import { SearchSubsubCategoryProductsQuery } from "../../../../../../generated/graphql";
import ProductsContainer from "../../../../../../shared/ProductsContainer";
import ProductCard from "../../../../../../shared/ProductCard";
import ProductCardWrapper from "../../../../../../wrappers/ProductCardWrapper";
import { Link } from "react-router-dom";
import FilterPanel from "../../../../../../shared/FilterPanel";

interface Props {
	data?: SearchSubsubCategoryProductsQuery;
	loading: boolean;

	options: object;
	onFilterSearch: (values: object) => void;
}

const AnyCategoryContent = ({
	data,
	loading,
	options,
	onFilterSearch
}: Props) => {
	const productsInfo = data?.searchProducts.productsInfo;
	return (
		<>
			<FilterPanel
				categoryId={3}
				needRender={false}
				initialOptions={options}
				onFilterSearch={onFilterSearch}
			/>
			<ProductsContainer
				cards={
					productsInfo?.map(p => (
						<ProductCardWrapper.Default>
							<ProductCard title={p.name} price={3.0} />
						</ProductCardWrapper.Default>
					)) ?? []
				}
			/>
			<Link to="/">12</Link>
		</>
	);
};

export default AnyCategoryContent;
