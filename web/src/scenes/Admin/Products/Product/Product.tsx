import React, { useState } from "react";
import Page from "../../../../shared/Page";
import Actions from "./Actions";
import {
	Category,
	useFindCategoryByIdQuery
} from "../../../../generated/graphql";
import classes from "./Product.module.scss";
import { useLocationField } from "react-location-query";
import SearchEdit from "./SearchEdit";

const Product = () => {
	const [productId, setProductId] = useLocationField("product", {
		type: "number",
		initial: -1,
		hideIfInitial: true
	});

	const onProductChange = (product: { id: number }) => {
		setProductId(product.id);
	};

	const { data, loading } = useFindCategoryByIdQuery({
		skip: productId === -1,
		variables: { id: productId }
	});

	return (
		<Page>
			<div className={classes.edit}>
				<SearchEdit onProductChange={onProductChange} />
				<Actions />
			</div>
		</Page>
	);
};

export default Product;
