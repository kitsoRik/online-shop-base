import React from "react";
import { Select } from "antd";
import languages from "./languages";
import App from "./App";

interface Props {
	value?: string;
	onChange?: (code: string, name: string) => void;

	exceptCodes?: string[];
}

const InputLanguage = ({ value, onChange, exceptCodes = [] }: Props) => {
	return (
		<Select
			value={value}
			onChange={value =>
				onChange
					? onChange(
							value,
							languages.find(l => l.code === value)!.name
					  )
					: ""
			}
		>
			{languages
				.filter(l => !exceptCodes.includes(l.code))
				.map(({ name, code }) => (
					<Select.Option value={code} key={code}>
						{name}
					</Select.Option>
				))}
		</Select>
	);
};

InputLanguage.App = App;

export default InputLanguage;
