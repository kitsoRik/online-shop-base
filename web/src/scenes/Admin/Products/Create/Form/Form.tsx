import React from "react";
import { Form as FormD, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import InputCategory from "../../../../../shared/InputCategory";
import { useForm } from "antd/lib/form/Form";

interface Props {
	onCreate: (name: string, description: string, parentId?: number) => void;
}

const Form = ({ onCreate }: Props) => {
	const [form] = useForm();

	return (
		<FormD
			form={form}
			onFinish={({ name, description, parent }) => {
				onCreate(name, description, parent);
			}}
			layout="vertical"
		>
			<FormD.Item name="name" label="Category name">
				<Input
					size="large"
					placeholder="Input category name"
					prefix={<UserOutlined />}
					required
				/>
			</FormD.Item>
			<FormD.Item name="description" label="Category description">
				<Input size="large" placeholder="Input category description" />
			</FormD.Item>
			<FormD.Item name="parent" label="Category description">
				<InputCategory />
			</FormD.Item>
			<FormD.Item>
				<Button type="primary" htmlType="submit">
					Create
				</Button>
			</FormD.Item>
		</FormD>
	);
};

export default Form;
