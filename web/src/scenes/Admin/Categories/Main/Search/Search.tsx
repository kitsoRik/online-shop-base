import React, { useState } from "react";
import SearchD from "antd/lib/input/Search";
import { Category } from "../../../../../generated/graphql";
import { useFindCategoryByNameTemplateQuery } from "../../../../../generated/graphql";
import { AutoComplete } from "antd";

interface Props {
	onCategoryChange: (category: Category) => void;
}

const Search = ({ onCategoryChange }: Props) => {
	const [template, setTemplate] = useState("");

	const { data, loading } = useFindCategoryByNameTemplateQuery({
		skip: template === "",
		variables: {
			template
		}
	});

	const onSearch = (nameTemplate: string) => {
		setTemplate(nameTemplate);
	};

	const categories = data?.findCategoryByNameTemplate ?? [];

	const options = categories.map(category => ({
		value: category.name,
		key: category.id
	}));

	return (
		<AutoComplete
			dropdownMatchSelectWidth={252}
			options={options}
			onChange={value => setTemplate(value)}
		>
			<SearchD
				loading={loading}
				placeholder="Input category name"
				size="large"
			/>
		</AutoComplete>
	);
};

export default Search;
