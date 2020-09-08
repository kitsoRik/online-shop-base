import React from "react";
import { Form, InputNumber, Checkbox } from "antd";

interface Props {
	initialOptions?: any;
}

const Slider = ({ initialOptions }: Props) => {
	return (
		<>
			<Form.Item shouldUpdate>
				{({ getFieldValue }) => {
					const isFloat = getFieldValue(["options", "isFloat"]);
					const step = isFloat ? 0.01 : 1;

					return (
						<>
							<Form.Item
								label="Is float"
								name={["options", "isFloat"]}
								initialValue={initialOptions?.isFloat}
								valuePropName="checked"
							>
								<Checkbox />
							</Form.Item>
							<Form.Item
								label="Min"
								name={["options", "min"]}
								initialValue={initialOptions?.min}
							>
								<InputNumber step={step} />
							</Form.Item>
							<Form.Item
								label="Max"
								name={["options", "max"]}
								initialValue={initialOptions?.max}
							>
								<InputNumber step={step} />
							</Form.Item>
						</>
					);
				}}
			</Form.Item>
		</>
	);
};

export default Slider;
