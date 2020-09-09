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
				name: string;
				categoryField?: {
					id: number;
					type: string;
					options?: object | null;
				} | null;
				options?: any | null;
			}[];
		},
		FilterGroup
	>;

	initialOptions: { [path: string]: any };
}

const Group = ({ group, initialOptions }: Props) => {
	return (
		<Form.Item label={group.name}>
			{group.fields.map(field => (
				<Field
					field={field}
					initialOption={initialOptions[field.name]}
				/>
			))}
		</Form.Item>
	);
};

export default Group;
