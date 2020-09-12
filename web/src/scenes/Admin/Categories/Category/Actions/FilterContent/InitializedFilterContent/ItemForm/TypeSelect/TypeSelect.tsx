import React from "react";
import { Select } from "antd";

interface Props {
	value?: string;
	onChange?: (value: string) => void;

	categoryFieldType?: string;
}

const TypeSelect = ({ value, onChange, categoryFieldType }: Props) => {
	const options = getOptions(categoryFieldType);

	return (
		<Select value={value} onChange={onChange}>
			{options.map(value => (
				<Select.Option value={value}>{value}</Select.Option>
			))}
		</Select>
	);
};

const getOptions = (categoryFieldType?: string) => {
	switch (categoryFieldType) {
		case "number":
			return ["slider", "spin", "enum"];
		case "boolean":
			return ["enum"];
	}

	return [];
};

export default TypeSelect;
