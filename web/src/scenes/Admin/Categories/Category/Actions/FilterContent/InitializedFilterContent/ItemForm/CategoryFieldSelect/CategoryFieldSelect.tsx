import React from "react";
import { useCategoryFieldsQuery } from "../../../../../../../../../generated/graphql";
import { Spin, Select } from "antd";

interface Props {
	value?: number | { id: number };
	onChange?: (field: { id: number; type: string }) => void;
	onChangeField: (field: { id: number; type: string }) => void;

	categoryId: number;
}

const CategoryFieldSelect = ({
	value,
	onChange,
	onChangeField,
	categoryId
}: Props) => {
	const { data, loading } = useCategoryFieldsQuery({
		variables: {
			categoryId
		}
	});

	const fields = data?.categories?.[0].fields ?? [];

	return (
		<Spin spinning={loading}>
			<Select
				value={typeof value === "number" ? value : value?.id}
				onChange={id => {
					const field = fields.find(f => f.id === id)!;
					if (onChange) onChange(field);
					onChangeField(field);
				}}
			>
				{fields.map(field => (
					<Select.Option value={field.id}>{field.name}</Select.Option>
				))}
			</Select>
		</Spin>
	);
};

export default CategoryFieldSelect;
