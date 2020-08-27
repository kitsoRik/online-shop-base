import React from "react";
import { useGetLanguagesQuery } from "../../../generated/graphql";
import { Select } from "antd";

interface Props {
	value?: string;
	onChange?: (id: number, code: string) => void;

	exceptCodes?: string[];
}

const App = ({ value, onChange, exceptCodes = [] }: Props) => {
	const { data } = useGetLanguagesQuery();
	const languages = data?.languages ?? [];

	console.log(languages, exceptCodes);

	return (
		<Select
			value={languages.find(l => l.code === value)?.code}
			onChange={value =>
				onChange
					? onChange(
							languages.find(l => l.code === value)?.id ?? -1,
							value
					  )
					: ""
			}
		>
			{languages
				.filter(l => !exceptCodes.includes(l.code))
				.map(({ id, code }) => (
					<Select.Option value={code} key={id}>
						{code}
					</Select.Option>
				))}
		</Select>
	);
};

export default App;
