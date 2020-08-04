import React from "react";
import { Form as FormD, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import InputCategory from "../../../../../shared/InputCategory";
import { useForm, FormInstance } from "antd/lib/form/Form";

interface Props {
	onCreate: (name: string, categoryId: number, form: FormInstance) => void;
}

const Form = ({ onCreate }: Props) => {
	const [form] = useForm();

	return (
		<FormD
			form={form}
			onFinish={({ name, category }) => onCreate(name, category, form)}
			layout="vertical"
		>
			<FormD.Item name="name" label="Product name">
				<Input
					size="large"
					placeholder="Input product name"
					prefix={<UserOutlined />}
					required
				/>
			</FormD.Item>
			<FormD.Item name="category" label="Category description">
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
