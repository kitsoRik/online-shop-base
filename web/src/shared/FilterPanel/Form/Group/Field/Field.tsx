import React from "react";
import { Form } from "antd";
import Number from "./Number";
import Boolean from "./Boolean";

interface Props {
	field: {
		id: string;
		type: string;
		name: string;
		categoryField?: {
			id: number;
			type: string;
			options: any;
		} | null;
		options: any;
	};

	initialOption: any; // value
}

const Field = ({ field, initialOption }: Props) => {
	if (!field.categoryField) return null;

	const component = getFieldOptionComponent(field as any);
	console.log(field);
	return (
		<Form.Item
			name={field.id}
			label={field.name}
			initialValue={initialOption}
		>
			{component}
		</Form.Item>
	);
};

const getFieldOptionComponent = (field: {
	id: string;
	type: string;
	name: string;
	categoryField: {
		id: number;
		type: string;
		options: any;
	};
	options: object;
}) => {
	switch (field.categoryField?.type) {
		case "boolean":
			return <Boolean field={field} />;
		case "number":
			return <Number field={field} />;
	}
	return null;
};
export default Field;
