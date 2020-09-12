import React from "react";
import Slider from "./Slider";
import Spin from "./Spin";
import Enum from "./Enum";

interface Props {
	field: {
		id: string;
		name: string;
		options: object;
		type: string;
	};

	value?: any;
	onChange?: (...args: any) => void;
}

const Number = ({ field, value, onChange }: Props) => {
	if (field.type === "slider")
		return (
			<Slider options={field.options} value={value} onChange={onChange} />
		);
	if (field.type === "spin")
		return (
			<Spin options={field.options} value={value} onChange={onChange} />
		);
	if (field.type === "enum")
		return (
			<Enum
				field={field}
				options={field.options}
				value={value}
				onChange={onChange}
			/>
		);

	throw new Error(`Unknown type for Number, got ${field.type}`);
};

export default Number;
