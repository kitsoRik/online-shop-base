import React from "react";
import {
	Slider as SliderD,
	Spin as SpinD,
	InputNumber,
	Checkbox,
	Form
} from "antd";

interface Props {
	field: { id: string };
	options: any;

	value?: any;
	onChange?: (value: any) => void;
}

const Enum = ({
	field,
	options: { values = [] },
	value = {},
	onChange
}: Props) => {
	return (
		<>
			{values.map((v: number) => (
				<Form.Item
					name={[field.id, `${v}`]}
					initialValue={!!value[v]}
					valuePropName="checked"
				>
					<Checkbox
						checked={value[v]}
						onChange={event => {
							if (onChange)
								onChange({
									...value,
									[v]: event.target.checked
								});
						}}
					/>
					<label> {v}</label>
				</Form.Item>
			))}
		</>
	);
};

export default Enum;
