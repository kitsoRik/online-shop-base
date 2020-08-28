import React from "react";
import { Form, Input } from "antd";
import { FormInstance } from "antd/lib/form";
import TypeSelect from "../TypeSelect";
import { useTranslation } from "react-i18next";
import FloatOptions from "./FloatOptions";
import IntegerOptions from "./IntegerOptions";

interface Props {
	form: FormInstance;
	onFinish: (
		name: string,
		type: string,
		defaultValue: string,
		options: object
	) => void;

	initialValues?: {
		name: string;
		type: string;
		defaultValue: string;
		options?: object | null;
	};
}

const FieldForm = ({ form, onFinish, initialValues }: Props) => {
	const { t } = useTranslation();
	return (
		<Form
			form={form}
			onFinish={({ name, type, defaultValue, options }) =>
				onFinish(name, type, defaultValue, options)
			}
		>
			<Form.Item
				name="name"
				label={t(
					"admin.categories.edit.actions.fields.modifyDialog.form.name.label"
				)}
				required
				rules={[
					{
						required: true,
						message: t(
							"admin.categories.edit.actions.fields.modifyDialog.form.name.rules.required.message"
						)
					}
				]}
				initialValue={initialValues?.name}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="type"
				label={t(
					"admin.categories.edit.actions.fields.modifyDialog.form.type.label"
				)}
				required
				rules={[
					{
						required: true,
						message: t(
							"admin.categories.edit.actions.fields.modifyDialog.form.type.rules.required.message"
						)
					}
				]}
				initialValue={initialValues?.type}
			>
				<TypeSelect />
			</Form.Item>
			<Form.Item label="Options" shouldUpdate>
				{() => {
					if (
						initialValues?.type === "integer" ||
						form.getFieldValue("type")
					)
						return (
							<IntegerOptions
								intitialOptions={initialValues?.options}
							/>
						);
					if (
						initialValues?.type === "float" ||
						form.getFieldValue("type")
					)
						return (
							<FloatOptions
								intitialOptions={initialValues?.options}
							/>
						);
				}}
			</Form.Item>

			<Form.Item
				name="defaultValue"
				label={t(
					"admin.categories.edit.actions.fields.modifyDialog.form.defaultValue.label"
				)}
				required
				rules={[
					{
						required: true,
						message: t(
							"admin.categories.edit.actions.fields.modifyDialog.form.defaultValue.rules.required.message"
						)
					}
				]}
				initialValue={initialValues?.defaultValue}
			>
				<Input />
			</Form.Item>
		</Form>
	);
};

export default FieldForm;
