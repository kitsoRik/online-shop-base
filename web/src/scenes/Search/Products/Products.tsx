import React from "react";
import ProductsContainer from "../../../shared/ProductsContainer";
import ProductCardWrapper from "../../../wrappers/ProductCardWrapper";
import ProductCard from "../../../shared/ProductCard";

const Products = () => {
	return (
		<ProductsContainer
			cards={[
				<ProductCardWrapper.Default>
					<ProductCard price={0} title="" />
				</ProductCardWrapper.Default>
			]}
		/>
	);
};

export default Products;
