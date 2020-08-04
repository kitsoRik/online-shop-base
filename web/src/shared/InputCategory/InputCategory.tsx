import React, { useState } from "react";
import { Input, AutoComplete } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useFindCategoryByNameTemplateQuery } from "../../generated/graphql";

interface Props {
	value?: number | string;
	onChange?: (value: number) => void;
}

const InputCategory = ({ value, onChange }: Props) => {
	const [template, setTemplate] = useState("");

	const { data, loading } = useFindCategoryByNameTemplateQuery({
		variables: { template }
	});

	const categories = data?.findCategoryByNameTemplate ?? [];

	const onSelect = (value: string, { key }: any) => {
		if (onChange) onChange(+key);
	};
	console.log(categories);
	return (
		<AutoComplete
			options={categories.map(category => ({
				value: category.name,
				key: category.id
			}))}
			style={{ width: 200 }}
			onSelect={onSelect}
			onSearch={setTemplate}
			placeholder="input here"
		/>
	);
};

export default InputCategory;
