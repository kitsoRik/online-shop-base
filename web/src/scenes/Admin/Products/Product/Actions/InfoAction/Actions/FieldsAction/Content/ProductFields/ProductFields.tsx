import React from "react";
import { List, ConfigProvider, Button } from "antd";
import {
	ProductField,
	CategoryField
} from "../../../../../../../../../../generated/graphql";
import FieldItem from "./FieldItem";
import { PlusOutlined } from "@ant-design/icons";
import { useLocationField } from "react-location-query";
import AddFieldDialog from "./AddFieldDialog";

interface Props {
	productFields: ProductField[];
	categoryFields: CategoryField[];
}

const ProductFields = ({ productFields, categoryFields }: Props) => {
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
					dataSource={productFields.filter(
						f => !categoryFields.map(c => c.id).includes(f.id)
					)}
					renderItem={productField => (
						<FieldItem productField={productField} />
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

export default ProductFields;
