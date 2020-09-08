import React from "react";
import Text from "./Text";
import Slider from "./Slider";
import Checkbox from "./Checkbox";
import { Form } from "antd";

interface Props {
	field: {
		id: string;
		type: string;
		categoryField?: {
			id: number;
			type: string;
			options?: object | null;
		} | null;
		options?: any | null;
	};
}

const Field = ({ field }: Props) => {
	const component = getFieldOptionComponent(field);
	return (
		<Form.Item name={field.id} label="Val">
			{component}
		</Form.Item>
	);
};

const getFieldOptionComponent = (field: {
	options?: any | null;
	type: string;
}) => {
	console.log(field.type);
	switch (field.type) {
		case "text":
			return <Text />;
		case "checkbox":
			return <Checkbox />;
		case "slider":
			return <Slider options={field.options} />;
	}
	return null;
};
export default Field;
