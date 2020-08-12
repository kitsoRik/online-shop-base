import React, { useState } from "react";
import Page from "../../../../shared/Page";
import Actions from "./Actions";
import {
	Category,
	useGetCategoryByIdQuery
} from "../../../../generated/graphql";
import classes from "./Edit.module.scss";
import { useLocationField } from "react-location-query";
import SearchEdit from "./SearchEdit";

const Edit = () => {
	const [categoryId, setCategoryId] = useLocationField("category", {
		type: "number",
		initial: -1,
		hideIfInitial: true
	});
	const onCategoryChange = (category: Category) => {
		setCategoryId(category.id);
	};

	const { data, loading } = useGetCategoryByIdQuery({
		skip: categoryId === -1,
		variables: { id: categoryId }
	});
	const category = (data?.categories ?? [null])[0];

	return (
		<Page>
			<div className={classes.edit}>
				<SearchEdit onCategoryChange={onCategoryChange} />
				<Actions category={category} />
			</div>
		</Page>
	);
};

export default Edit;
