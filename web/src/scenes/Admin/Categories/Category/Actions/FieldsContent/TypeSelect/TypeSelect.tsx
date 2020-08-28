import React from "react";
import { Select } from "antd";

interface Props {
	value?: string;
	onChange?: (value: string) => void;
}

const TypeSelect = ({ value, onChange }: Props) => {
	return (
		<Select value={value} onChange={onChange}>
			{["text", "integer", "float"].map(type => (
				<Select.Option value={type}>{type}</Select.Option>
			))}
		</Select>
	);
};

export default TypeSelect;
