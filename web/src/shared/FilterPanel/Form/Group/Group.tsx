import React from "react";
import { FilterGroup } from "../../../../generated/graphql";
import { Form } from "antd";
import Field from "./Field";

interface Props {
	group: Exclude<
		{
			id: string;
			name: string;
			fields: {
				id: string;
				type: string;
				categoryField?: {
					id: number;
					type: string;
					options?: object | null;
				} | null;
			}[];
		},
		FilterGroup
	>;
}

const Group = ({ group }: Props) => {
	return (
		<Form.Item label={group.name}>
			{group.fields.map(field => (
				<Field field={field} />
			))}
		</Form.Item>
	);
};

export default Group;
