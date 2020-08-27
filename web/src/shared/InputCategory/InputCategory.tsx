import React, { useState } from "react";
import { AutoComplete } from "antd";
import { useFindCategoryByNameTemplateQuery } from "../../generated/graphql";
import { useTranslation } from "react-i18next";

interface Props {
	value?: number | string;
	onChange?: (value: number) => void;
}

const InputCategory = ({ value, onChange }: Props) => {
	const { t } = useTranslation();
	const [template, setTemplate] = useState("");

	const { data, loading } = useFindCategoryByNameTemplateQuery({
		variables: { template }
	});

	const categories = data?.findCategoryByNameTemplate ?? [];

	const onSelect = (value: string, { key }: any) => {
		if (onChange) onChange(+key);
	};

	return (
		<AutoComplete
			options={categories.map(category => ({
				value: category.name,
				key: category.id
			}))}
			style={{ width: 200 }}
			onSelect={onSelect}
			onSearch={setTemplate}
			placeholder={t("shared.inputCategory.placeholder")}
		/>
	);
};

export default InputCategory;
