import React from "react";
import { Select } from "antd";

interface Props {
	value?: string;
	onChange?: (value: string) => void;
}

const TypeSelect = ({ value, onChange }: Props) => {
	return (
		<Select value={value} onChange={onChange}>
			{["unknown", "checkbox", "text"].map(value => (
				<Select.Option value={value}>{value}</Select.Option>
			))}
		</Select>
	);
};

export default TypeSelect;
