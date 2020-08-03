import React from "react";
import { Form as FormD, Input, Button } from "antd";
import { useForm, FormInstance } from "antd/lib/form/Form";

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 }
};

interface Props {
	onRegister: (
		firstName: string,
		lastName: string,
		middleName: string,
		phone: string,
		email: string,
		password: string,
		form: FormInstance
	) => void;
}

const Form = ({ onRegister }: Props) => {
	const [form] = useForm();

	return (
		<FormD
			{...layout}
			style={{ width: "650px" }}
			form={form}
			onFinish={({
				firstName,
				lastName,
				middleName,
				phone,
				email,
				password
			}) =>
				onRegister(
					firstName,
					lastName,
					middleName,
					phone,
					email,
					password,
					form
				)
			}
		>
			<FormD.Item
				label="Name"
				name="firstName"
				required
				rules={[{ required: true }]}
			>
				<Input />
			</FormD.Item>
			<FormD.Item
				label="Last name"
				name="lastName"
				required
				rules={[{ required: true }]}
			>
				<Input />
			</FormD.Item>
			<FormD.Item label="Middle name" name="middleName">
				<Input />
			</FormD.Item>
			<FormD.Item label="Phone" name="phone">
				<Input />
			</FormD.Item>
			<FormD.Item
				label="Email"
				name="email"
				required
				rules={[{ required: true }]}
			>
				<Input />
			</FormD.Item>
			<FormD.Item
				label="Password"
				name="password"
				required
				rules={[{ required: true }]}
			>
				<Input type="password" />
			</FormD.Item>
			<FormD.Item
				label="Confirm password"
				name="confirmPassword"
				required
				rules={[
					{ required: true },
					{
						validator: async (rule, value) => {
							const password = form.getFieldValue("password");
							if (value !== password)
								throw new Error("Password is not equals");
						}
					}
				]}
			>
				<Input type="password" />
			</FormD.Item>
			<FormD.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
				<Button type="primary" htmlType="submit">
					Register
				</Button>
			</FormD.Item>
		</FormD>
	);
};

export default Form;
