import React from "react";
import { SearchSubsubCategoryProductsQuery } from "../../../../../../generated/graphql";
import ProductsContainer from "../../../../../../shared/ProductsContainer";
import ProductCard from "../../../../../../shared/ProductCard";

interface Props {
	data?: SearchSubsubCategoryProductsQuery;
	loading: boolean;
}

const AnyCategoryContent = ({ data, loading }: Props) => {
	const productsInfo = data?.searchProducts.productsInfo;
	return (
		<>
			<ProductsContainer
				cards={productsInfo?.map(p => <ProductCard />) ?? []}
			/>
		</>
	);
};

export default AnyCategoryContent;
