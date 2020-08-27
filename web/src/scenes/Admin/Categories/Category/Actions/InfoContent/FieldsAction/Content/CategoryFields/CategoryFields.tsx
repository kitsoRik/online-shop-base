import React from "react";
import { List, Typography, ConfigProvider } from "antd";
import {
	CategoryField,
	Category,
	CategoryInfoField
} from "../../../../../../../../../generated/graphql";
import FieldItem from "./FieldItem/FieldItem";
import { useLocationField } from "react-location-query";
import ModifyDialog from "./ModifyDialog";

interface Props {
	categoryFields: CategoryField[];
	categoryInfoFields: CategoryInfoField[];
}

const CategoryFields = ({ categoryFields, categoryInfoFields }: Props) => {
	const [] = useLocationField("field_modify", {
		type: "number",
		initial: -1,
		hideIfInitial: true
	});
	console.log(categoryFields, categoryInfoFields);
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
							categoryField={categoryField}
							categoryInfoField={categoryInfoFields.find(
								f => f.categoryField?.id === categoryField.id
							)}
						/>
					)}
				/>
			</ConfigProvider>
			<ModifyDialog />
		</>
	);
};

export default CategoryFields;
