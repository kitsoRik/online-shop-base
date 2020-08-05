import React from "react";
import { List, Typography, ConfigProvider } from "antd";
import {
	CategoryField,
	ProductField
} from "../../../../../../../../../../generated/graphql";
import FieldItem from "./FieldItem/FieldItem";

interface Props {
	categoryFields: CategoryField[];
	productFields: ProductField[];
}

const CategoryFields = ({ categoryFields, productFields }: Props) => {
	return (
		<>
			<Typography.Title level={3}>From category</Typography.Title>
			<ConfigProvider renderEmpty={() => <div>123</div>}>
				<List
					itemLayout="horizontal"
					dataSource={categoryFields}
					locale={{ emptyText: "No fields" }}
					renderItem={categoryField => (
						<FieldItem
							productField={productFields.find(
								f => f.id === categoryField.id
							)}
							categoryField={categoryField}
						/>
					)}
				/>
			</ConfigProvider>
		</>
	);
};

export default CategoryFields;
