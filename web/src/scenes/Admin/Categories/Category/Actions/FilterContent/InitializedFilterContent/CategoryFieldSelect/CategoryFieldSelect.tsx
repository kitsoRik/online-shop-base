import React from "react";
import { useCategoryFieldsQuery } from "../../../../../../../../generated/graphql";
import { Spin, Select } from "antd";

interface Props {
	value?: number;
	onChange?: (value: number) => void;

	categoryId: number;
}

const CategoryFieldSelect = ({ value, onChange, categoryId }: Props) => {
	const { data, loading } = useCategoryFieldsQuery({
		variables: {
			categoryId
		}
	});

	const fields = data?.categories?.[0].fields ?? [];

	return (
		<Spin spinning={loading}>
			<Select value={value} onChange={onChange}>
				{fields.map(field => (
					<Select.Option value={field.id}>{field.name}</Select.Option>
				))}
			</Select>
		</Spin>
	);
};

export default CategoryFieldSelect;
