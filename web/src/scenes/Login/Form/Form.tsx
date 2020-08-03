import React from "react";
import { Form as FormD, Input, Button, Checkbox } from "antd";
import { useForm, FormInstance } from "antd/lib/form/Form";

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 }
};

interface Props {
	onLogin: (
		email: string,
		password: string,
		remember: true,
		form: FormInstance
	) => void;
}

const Form = ({ onLogin }: Props) => {
	const [form] = useForm();

	return (
		<FormD
			{...layout}
			style={{ width: "650px" }}
			form={form}
			onFinish={({ email, password, remember }) =>
				onLogin(email, password, remember, form)
			}
		>
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
				label="Remember me"
				name="remember"
				valuePropName="checked"
			>
				<Checkbox />
			</FormD.Item>
			<FormD.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
				<Button type="primary" htmlType="submit">
					Login
				</Button>
			</FormD.Item>
		</FormD>
	);
};

export default Form;
