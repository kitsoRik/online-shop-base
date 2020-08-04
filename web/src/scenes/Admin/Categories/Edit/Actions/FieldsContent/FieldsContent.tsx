import React from "react";
import {
	useGetFieldsCategoryByIdQuery,
	Category
} from "../../../../../../generated/graphql";
import { Button, List } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddFieldDialog from "./AddFieldDialog";
import { useLocationField, useLocationFieldT } from "react-location-query";
import FieldItem from "./FieldItem";
import ModifyDialog from "./ModifyDialog";

interface Props {
	load: boolean;
}

const FieldsContent = ({ load }: Props) => {
	const [categoryId] = useLocationFieldT<number>("category");
	const [, setAdd] = useLocationField("add", {
		type: "boolean",
		initial: false,
		hideIfInitial: true
	});

	const [] = useLocationField("modify", {
		type: "string",
		initial: "",
		hideIfInitial: true
	});

	const { data, loading } = useGetFieldsCategoryByIdQuery({
		skip: !load,
		variables: { id: categoryId }
	});

	if (loading || !load) return null;

	const category = data?.findCategoryById;

	if (!category) throw new Error("Unknown category");

	const fields = category.fields ?? [];

	return (
		<>
			<List
				itemLayout="horizontal"
				dataSource={fields}
				renderItem={field => (
					<FieldItem categoryId={category.id} field={field} />
				)}
			/>
			<div>
				<Button type="dashed" block onClick={() => setAdd(true)}>
					<PlusOutlined />
					Add field
				</Button>
			</div>
			<AddFieldDialog />
			<ModifyDialog />
		</>
	);
};

export default FieldsContent;
