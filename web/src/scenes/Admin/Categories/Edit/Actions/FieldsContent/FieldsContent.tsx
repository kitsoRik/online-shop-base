import React from "react";
import {
	useGetFieldsCategoryByIdQuery,
	Category
} from "../../../../../../generated/graphql";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddFieldDialog from "./AddFieldDialog";
import { useLocationField } from "react-location-query";

interface Props {
	category: Category;

	load: boolean;
}

const FieldsContent = ({ category: { id }, load }: Props) => {
	const [, setAdd] = useLocationField("add", {
		type: "boolean",
		initial: false,
		hideIfInitial: true
	});

	const { data, loading } = useGetFieldsCategoryByIdQuery({
		skip: !load,
		variables: { id }
	});

	if (loading) return null;

	const category = data?.findCategoryById;

	if (!category) throw new Error("Unknown category");

	const fields = category.fields ?? [];

	return (
		<>
			<div>
				{fields.map(field => (
					<div>{field.name}</div>
				))}
			</div>
			<div>
				<Button type="dashed" block onClick={() => setAdd(true)}>
					<PlusOutlined />
					Add field
				</Button>
			</div>
			<AddFieldDialog categoryId={category.id} />
		</>
	);
};

export default FieldsContent;
