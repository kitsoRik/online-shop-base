import React from "react";
import { Form as FormD } from "antd";
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
			}[];
		},
		FilterGroup
	>[];
}

const Form = ({ form, groups }: Props) => {
	console.log(groups);
	return (
		<FormD form={form}>
			{groups.map(group => (
				<Group group={group} />
			))}
		</FormD>
	);
};

export default Form;
