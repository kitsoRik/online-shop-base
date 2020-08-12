import React from "react";
import { List, Typography, ConfigProvider } from "antd";
import { CategoryField } from "../../../../../../../../../generated/graphql";
import FieldItem from "./FieldItem/FieldItem";

interface Props {
	categoryFields: CategoryField[];
}

const CategoryFields = ({ categoryFields }: Props) => {
	return (
		<>
			<Typography.Title level={3}>From category</Typography.Title>
			<ConfigProvider renderEmpty={() => <div>123</div>}>
				<List
					itemLayout="horizontal"
					dataSource={categoryFields}
					locale={{ emptyText: "No fields" }}
					renderItem={categoryField => (
						<FieldItem categoryField={categoryField} />
					)}
				/>
			</ConfigProvider>
		</>
	);
};

export default CategoryFields;
