import React from "react";
import { Select } from "antd";

interface Props {
	value?: string;
	onChange?: (value: string) => void;

	fieldType?: string;
}

const TypeSelect = ({ value, onChange, fieldType }: Props) => {
	const options = getOptions(fieldType);
	console.log(fieldType);
	return (
		<Select value={value} onChange={onChange}>
			{options.map(value => (
				<Select.Option value={value}>{value}</Select.Option>
			))}
		</Select>
	);
};

const getOptions = (fieldType?: string) => {
	switch (fieldType) {
		case "integer":
			return ["text"];
		case "boolean":
			return ["checkbox"];
		case "text":
			return ["text"];
	}

	return [];
};

export default TypeSelect;
