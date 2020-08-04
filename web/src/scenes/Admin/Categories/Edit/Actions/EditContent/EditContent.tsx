import React from "react";
import { Category } from "../../../../../../generated/graphql";
import { Form, Input, Button } from "antd";

interface Props {
	category: Category;
}

const EditContent = ({ category }: Props) => {
	const onChange = (name: string) => {
		alert("new name " + name);
	};

	return (
		<>
			<Form onFinish={({ name }) => onChange(name)}>
				<Form.Item
					label="Name"
					initialValue={category.name}
					name="name"
					required
					rules={[{ required: true, message: "Name is required" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Change
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default EditContent;
