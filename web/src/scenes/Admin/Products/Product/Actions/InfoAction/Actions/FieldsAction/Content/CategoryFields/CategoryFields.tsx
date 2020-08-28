import React from "react";
import { List, Typography, ConfigProvider } from "antd";
import {
	CategoryField,
	ProductInfoField,
	CategoryInfoField
} from "../../../../../../../../../../generated/graphql";
import FieldItem from "./FieldItem/FieldItem";

interface Props {
	categoryFields: Exclude<{ id: number; name: string }, CategoryField>[];
	categoryInfoFields: Exclude<
		{
			id: number;
			name?: string | null;
			categoryField?: Exclude<{ id: number }, CategoryField> | null;
		},
		CategoryInfoField
	>[];
	productInfoFields: Exclude<
		{ id: number; categoryInfoField?: { id: number } | null },
		ProductInfoField
	>[];
}

const CategoryFields = ({
	categoryFields,
	categoryInfoFields,
	productInfoFields
}: Props) => {
	return (
		<>
			<Typography.Title level={3}>From category</Typography.Title>
			<ConfigProvider renderEmpty={() => <div>123</div>}>
				<List
					itemLayout="horizontal"
					dataSource={categoryInfoFields}
					locale={{ emptyText: "No fields" }}
					renderItem={categoryInfoField => (
						<FieldItem
							productField={productInfoFields.find(
								f =>
									f.categoryInfoField?.id ===
									categoryInfoField.id
							)}
							categoryField={categoryFields.find(
								f =>
									f.id === categoryInfoField.categoryField?.id
							)}
							categoryInfoField={categoryInfoField}
						/>
					)}
				/>
			</ConfigProvider>
		</>
	);
};

export default CategoryFields;
