import React, { useState } from "react";
import SearchD from "antd/lib/input/Search";
import { Category } from "../../../../../generated/graphql";
import { useFindCategoryByNameTemplateQuery } from "../../../../../generated/graphql";
import { AutoComplete } from "antd";
import { useHistory } from "react-router";
import classes from "./Search.module.scss";
import CategoriesTree from "./CategoriesTree";

interface Props {
	initialValue?: string;
	onCategoryChange: (category: Category) => void;
}

const Search = ({ initialValue, onCategoryChange }: Props) => {
	const [template, setTemplate] = useState("");

	const history = useHistory();

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
					// @ts-ignore
					onCategoryChange(categories.find(c => c.id === key)!)
				}
				onClick={() => {
					if (
						!history.location.pathname.startsWith(
							"/admin/categories/edit"
						)
					) {
						history.push("/admin/categories/edit");
					}
				}}
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
