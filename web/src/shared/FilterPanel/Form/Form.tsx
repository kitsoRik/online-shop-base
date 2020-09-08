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
				categoryField?: {
					id: number;
					type: string;
					options?: object | null;
				} | null;
				options?: any | null;
			}[];
		},
		FilterGroup
	>[];
}

const Form = ({ form, groups }: Props) => {
	return (
		<FormD form={form} onFinish={console.log}>
			{groups.map(group => (
				<Group group={group} />
			))}
			<Button type="primary" onClick={form.submit}>
				Search
			</Button>
		</FormD>
	);
};

export default Form;
