import React from "react";
import { Form as FormD, Button } from "antd";
import { FormInstance } from "antd/lib/form";
import { FilterGroup } from "../../../generated/graphql";
import Group from "./Group";

interface Props {
	form: FormInstance;

	groups: Exclude<
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
					options: object;
				} | null;
				options: object;
			}[];
		},
		FilterGroup
	>[];

	initialOptions: object;
	onSearch: (values: object) => void;
}

const Form = ({ form, groups, initialOptions, onSearch }: Props) => {
	return (
		<FormD form={form} onFinish={onSearch}>
			{groups.map(group => (
				<Group group={group} initialOptions={initialOptions} />
			))}
			<Button type="primary" onClick={form.submit}>
				Search
			</Button>
		</FormD>
	);
};

export default Form;
