import React, { useState } from "react";
import { Form, InputNumber, Checkbox, Button, Input } from "antd";

interface Props {
	initialOptions?: any;
}

const Spin = ({ initialOptions }: Props) => {
	const [count, setCount] = useState(initialOptions?.values?.length ?? 0);

	return (
		<>
			<Form.Item>
				{Array.from({ length: count }).map((v, index) => (
					<Form.Item
						label="Is "
						name={["options", "values", index]}
						initialValue={initialOptions?.values?.[index]}
					>
						<Input />
					</Form.Item>
				))}
				<Form.Item>
					<Button onClick={() => setCount(count + 1)}>
						Add enum field
					</Button>
				</Form.Item>
			</Form.Item>
		</>
	);
};

export default Spin;
