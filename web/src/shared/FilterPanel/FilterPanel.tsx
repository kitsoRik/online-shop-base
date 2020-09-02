import React from "react";
import { useGetCategoryFilterFieldsQuery } from "../../generated/graphql";
import { useForm } from "antd/lib/form/Form";
import Form from "./Form";
import { Spin } from "antd";

interface Props {
	categoryId: number;

	needRender: boolean;
}

const FilterPanel = ({ categoryId }: Props) => {
	const { data, loading } = useGetCategoryFilterFieldsQuery({
		variables: {
			categoryId
		}
	});

	const [form] = useForm();

	const category = data?.categories?.[0];

	if (loading) return <Spin spinning />;

	if (!category) return <h1>Error</h1>;

	const filter = category.filter;
	if (!filter) return <h1>Error2</h1>;

	const groups = filter.groups;

	return (
		<>
			<Form form={form} groups={groups} />
		</>
	);
};

export default FilterPanel;
