import React, { useState } from "react";
import Page from "../../../../shared/Page";
import Actions from "./Actions";
import {
	Category,
	useFindCategoryByIdQuery
} from "../../../../generated/graphql";
import classes from "./Edit.module.scss";
import { useLocationField } from "react-location-query";
import SearchEdit from "./SearchEdit";

const Edit = () => {
	const [category, setCategory] = useState<Category | null>(null);

	const [categoryId, setCategoryId] = useLocationField("category", {
		type: "number",
		initial: -1,
		hideIfInitial: true
	});

	const onCategoryChange = (category: Category) => {
		setCategory(category);
		alert(category.id);
		setCategoryId(category.id);
	};

	const { data, loading } = useFindCategoryByIdQuery({
		skip: categoryId === -1,
		variables: { id: categoryId }
	});

	if (
		(category === null && categoryId !== -1) ||
		category?.id !== categoryId
	) {
		const category = data?.findCategoryById;
		if (!category && !loading) {
			setCategoryId(-1);
		} else {
			if (category) setCategory(category);
		}
	}

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
