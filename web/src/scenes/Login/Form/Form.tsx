import React from "react";
import { Form as FormD, Input, Button, Checkbox } from "antd";
import { useForm, FormInstance } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";

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
	const { t } = useTranslation();
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
				label={t("scenes.login.form.email.label")}
				name="email"
				required
				rules={[
					{
						required: true,
						message: t(
							"scenes.login.form.email.rules.required.message"
						)
					}
				]}
			>
				<Input />
			</FormD.Item>
			<FormD.Item
				label={t("scenes.login.form.password.label")}
				name="password"
				required
				rules={[
					{
						required: true,
						message: t(
							"scenes.login.form.password.rules.required.message"
						)
					}
				]}
			>
				<Input type="password" />
			</FormD.Item>
			<FormD.Item
				label={t("scenes.login.form.remember.label")}
				name="remember"
				valuePropName="checked"
			>
				<Checkbox />
			</FormD.Item>
			<FormD.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
				<Button type="primary" htmlType="submit">
					{t("scenes.login.form.submit")}
				</Button>
			</FormD.Item>
		</FormD>
	);
};

export default Form;
