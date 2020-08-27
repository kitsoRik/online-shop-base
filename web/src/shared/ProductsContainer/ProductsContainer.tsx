import React from "react";
import ProductCard from "../ProductCard";
import classes from "./ProductsContainer.module.scss";
import ProductCardWrapper from "../../wrappers/ProductCardWrapper";
import getProductCardWrapperTypes from "./utils/getProductCardWrapperTypes";

interface Props {
	cards: JSX.Element[];
}

const ProductsContainer = ({ cards }: Props) => {
	const products = cards.filter(
		c =>
			c &&
			(c.type === ProductCard ||
				getProductCardWrapperTypes().includes(c.type))
	);
	return <div className={classes.productsContainer}>{products}</div>;
};

export default ProductsContainer;
