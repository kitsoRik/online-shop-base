import React, { useState } from "react";
import SearchD from "antd/lib/input/Search";
import { Category } from "../../../../../generated/graphql";
import { useFindCategoryByNameTemplateQuery } from "../../../../../generated/graphql";
import { AutoComplete } from "antd";
import { useHistory } from "react-router";
import classes from "./Search.module.scss";
import CategoriesTree from "./CategoriesTree";
import { useQueryPush } from "react-location-query";

interface Props {
	initialValue?: string;
}

const Search = ({ initialValue }: Props) => {
	const [template, setTemplate] = useState("");

	const queryPush = useQueryPush();

	const { data, loading } = useFindCategoryByNameTemplateQuery({
		skip: template === "",
		variables: {
			template
		}
	});

	const categories = data?.findCategoryByNameTemplate ?? [];

	const options = categories.map(category => ({
		value: category.name,
		key: category.id
	}));
	return (
		<>
			<AutoComplete
				defaultValue={initialValue}
				className={classes.search}
				dropdownMatchSelectWidth={252}
				options={options}
				onChange={value => setTemplate(value)}
				onSelect={(v, { key }) =>
					queryPush(`/admin/categories/${key}`, {})
				}
			>
				<SearchD
					loading={loading}
					placeholder="Input category name"
					size="large"
				/>
			</AutoComplete>
			<CategoriesTree />
		</>
	);
};

export default Search;
