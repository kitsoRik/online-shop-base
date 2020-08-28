import React from "react";
import { Form, Input, InputNumber } from "antd";

interface Props {
	step?: number;
	intitialOptions?: any;
}

const FloatOptions = ({ step = 0.01, intitialOptions }: Props) => {
	return (
		<>
			<Form.Item
				label="Min"
				name={["options", "min"]}
				initialValue={intitialOptions?.min}
			>
				<InputNumber step={step} />
			</Form.Item>
			<Form.Item
				label="Max"
				name={["options", "max"]}
				initialValue={intitialOptions?.max}
			>
				<InputNumber step={step} />
			</Form.Item>
		</>
	);
};

export default FloatOptions;
