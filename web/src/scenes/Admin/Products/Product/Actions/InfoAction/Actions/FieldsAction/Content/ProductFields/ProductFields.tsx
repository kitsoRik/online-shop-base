import React from "react";
import { List, ConfigProvider, Button, Typography } from "antd";
import {
	ProductInfoField,
	CategoryField,
	CategoryInfoField
} from "../../../../../../../../../../generated/graphql";
import FieldItem from "./FieldItem";
import { PlusOutlined } from "@ant-design/icons";
import { useLocationField } from "react-location-query";
import AddFieldDialog from "./AddFieldDialog";
import EditFieldDialog from "./EditFieldDialog";

interface Props {
	productInfoFields: Exclude<
		{ id: number; categoryInfoField?: { id: number } | null },
		ProductInfoField
	>[];
	categoryInfoFields: Exclude<{ id: number }, CategoryInfoField>[];
}

const ProductFields = ({ productInfoFields, categoryInfoFields }: Props) => {
	const [, setAdd] = useLocationField("add", {
		type: "boolean",
		initial: false,
		hideIfInitial: true
	});
	console.log(productInfoFields);
	return (
		<>
			<Typography.Title level={3}>Additional fields</Typography.Title>
			<ConfigProvider
				renderEmpty={() => <div>You have no additional field</div>}
			>
				<List
					itemLayout="horizontal"
					dataSource={productInfoFields.filter(
						f => !f.categoryInfoField
					)}
					renderItem={productInfoField => (
						<FieldItem productInfoField={productInfoField} />
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
			<EditFieldDialog />
		</>
	);
};

export default ProductFields;
