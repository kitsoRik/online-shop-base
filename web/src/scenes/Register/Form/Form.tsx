import React from "react";
import { Form as FormD, Input, Button } from "antd";
import { useForm, FormInstance } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";

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
	const { t } = useTranslation();
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
				label={t("scenes.register.form.firstName.label")}
				name="firstName"
				required
				rules={[
					{
						required: true,
						message: t(
							"scenes.register.form.firstName.rules.required"
						)
					}
				]}
			>
				<Input />
			</FormD.Item>
			<FormD.Item
				label={t("scenes.register.form.lastName.label")}
				name="lastName"
				required
				rules={[
					{
						required: true,
						message: t(
							"scenes.register.form.lastName.rules.required"
						)
					}
				]}
			>
				<Input />
			</FormD.Item>
			<FormD.Item
				label={t("scenes.register.form.middleName.label")}
				name="middleName"
			>
				<Input />
			</FormD.Item>
			<FormD.Item
				label={t("scenes.register.form.phone.label")}
				name="phone"
			>
				<Input />
			</FormD.Item>
			<FormD.Item
				label={t("scenes.register.form.email.label")}
				name="email"
				required
				rules={[
					{
						required: true,
						message: t("scenes.register.form.email.rules.required")
					}
				]}
			>
				<Input />
			</FormD.Item>
			<FormD.Item
				label={t("scenes.register.form.password.label")}
				name="password"
				required
				rules={[
					{
						required: true,
						message: t(
							"scenes.register.form.firstName.password.required"
						)
					}
				]}
			>
				<Input type="password" />
			</FormD.Item>
			<FormD.Item
				label={t("scenes.register.form.confirmPassword.label")}
				name="confirmPassword"
				required
				rules={[
					{ required: true },
					{
						validator: async (rule, value) => {
							const password = form.getFieldValue("password");
							if (value !== password)
								throw new Error(
									t(
										"scenes.register.form.confirmPassword.rules.equalToPassword"
									)
								);
						}
					}
				]}
			>
				<Input type="password" />
			</FormD.Item>
			<FormD.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
				<Button type="primary" htmlType="submit">
					{t("scenes.register.form.submit")}
				</Button>
			</FormD.Item>
		</FormD>
	);
};

export default Form;
