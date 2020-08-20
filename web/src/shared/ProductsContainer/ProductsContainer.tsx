import React from "react";
import ProductCard from "../ProductCard";
import classes from "./ProductsContainer.module.scss";

interface Props {
	cards: JSX.Element[];
}

const ProductsContainer = ({ cards }: Props) => {
	const products = cards.filter(c => c && c.type === ProductCard);
	return <div className={classes.productsContainer}>{products}</div>;
};

export default ProductsContainer;
