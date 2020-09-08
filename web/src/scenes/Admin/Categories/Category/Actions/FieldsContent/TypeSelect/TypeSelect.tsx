import React from "react";
import { Select } from "antd";

interface Props {
	value?: string;
	onChange?: (value: string) => void;
}

const TypeSelect = ({ value, onChange }: Props) => {
	return (
		<Select value={value} onChange={onChange}>
			{["text", "number", "boolean"].map(type => (
				<Select.Option value={type}>{type}</Select.Option>
			))}
		</Select>
	);
};

export default TypeSelect;
