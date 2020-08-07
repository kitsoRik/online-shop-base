import React from "react";
import { Select } from "antd";
import locales from "./locales";

interface Props {
	value?: string;
	onChange?: (code: string, name: string) => void;
}

const SelectLocales = ({ value, onChange }: Props) => {
	return (
		<Select
			value={value}
			onChange={value =>
				onChange
					? onChange(value, locales.find(l => l.code === value)!.name)
					: ""
			}
		>
			{locales.map(({ name, code }) => (
				<Select.Option value={code} key={code}>
					{name}
				</Select.Option>
			))}
		</Select>
	);
};

export default SelectLocales;
