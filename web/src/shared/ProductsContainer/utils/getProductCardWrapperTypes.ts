import ProductCardWrapper from "../../../wrappers/ProductCardWrapper";

const getProductCardWrapperTypes = () => {
	return Object.keys(ProductCardWrapper)
		.filter(p => p.charAt(0).toUpperCase() === p.charAt(0))
		.map(t => (ProductCardWrapper as any)[t]);
};

export default getProductCardWrapperTypes;
