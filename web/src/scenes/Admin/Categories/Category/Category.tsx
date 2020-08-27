import React, { useState } from "react";
import Page from "../../../../shared/Page";
import Actions from "./Actions";
import { useGetCategoryByIdQuery } from "../../../../generated/graphql";
import classes from "./Category.module.scss";
import Header from "./Header";
import { useParams } from "react-router";

const Category = () => {
	const { id } = useParams();
	const categoryId = +id;

	const { data, loading } = useGetCategoryByIdQuery({
		skip: categoryId === -1,
		variables: { id: categoryId }
	});

	const category = (data?.categories ?? [null])[0];

	return (
		<Page>
			<div className={classes.edit}>
				<Header />
				<Actions category={category} />
			</div>
		</Page>
	);
};

export default Category;
