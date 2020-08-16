import React from "react";
import { List, ConfigProvider, Button } from "antd";
import { CategoryField } from "../../../../../../../../../generated/graphql";
import FieldItem from "./FieldItem";
import { PlusOutlined } from "@ant-design/icons";
import { useLocationField } from "react-location-query";
import AddFieldDialog from "./AddFieldDialog";

interface Props {
	categoryFields: CategoryField[];
}

const CategoryFields = ({ categoryFields }: Props) => {
	const [, setAdd] = useLocationField("add", {
		type: "boolean",
		initial: false,
		hideIfInitial: true
	});
	return (
		<>
			<ConfigProvider
				renderEmpty={() => <div>You have no additional field</div>}
			>
				<List
					itemLayout="horizontal"
					dataSource={categoryFields.filter(
						f => !categoryFields.map(c => c.id).includes(f.id)
					)}
					renderItem={categoryField => (
						<FieldItem categoryField={categoryField} />
					)}
				/>
			</ConfigProvider>
			<div>
				<Button type="dashed" block onClick={() => setAdd(true)}>
					<PlusOutlined />
					Add field
				</Button>
			</div>
			<AddFieldDialog />
		</>
	);
};

export default CategoryFields;
