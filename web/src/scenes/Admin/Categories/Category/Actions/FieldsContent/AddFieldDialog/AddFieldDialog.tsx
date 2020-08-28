import React from "react";
import Modal from "antd/lib/modal/Modal";
import { Form, Input, Button, notification } from "antd";
import { useLocationFieldT } from "react-location-query";
import {
	useAddFieldToCategoryMutation,
	Category
} from "../../../../../../../generated/graphql";
import { useForm } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import TypeSelect from "../TypeSelect";

const AddFieldDialog = () => {
	const { t } = useTranslation();
	const { id } = useParams();
	const categoryId = +id;
	const [add, setAdd] = useLocationFieldT<boolean>("add");

	const [addFieldToCategory] = useAddFieldToCategoryMutation();

	const handleClose = () => {
		setAdd(false);
	};

	const onAddField = async (
		name: string,
		type: string,
		defaultValue: string
	) => {
		try {
			const {} = await addFieldToCategory({
				variables: { categoryId, name, type, defaultValue }
			});
			notification.success({
				message: t(
					"admin.categories.edit.actions.fields.addDialog.success",
					{ replace: { name } }
				)
			});
			handleClose();
		} catch (e) {
			console.error(e.message);
		}
	};

	const [form] = useForm();

	return (
		<Modal
			visible={add}
			onCancel={handleClose}
			closable={false}
			footer={
				<Form.Item>
					<Button onClick={form.submit}>
						{t(
							"admin.categories.edit.actions.fields.addDialog.footer.addField"
						)}
					</Button>
				</Form.Item>
			}
		>
			<Form
				form={form}
				onFinish={({ name, type, defaultValue }) =>
					onAddField(name, type, defaultValue)
				}
			>
				<Form.Item
					name="name"
					label={t(
						"admin.categories.edit.actions.fields.addDialog.form.name.label"
					)}
					required
					rules={[
						{
							required: true,
							message: t(
								"admin.categories.edit.actions.fields.addDialog.form.name.rules.required.message"
							)
						}
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="type"
					label={t(
						"admin.categories.edit.actions.fields.addDialog.form.type.label"
					)}
					required
					rules={[
						{
							required: true,
							message: t(
								"admin.categories.edit.actions.fields.addDialog.form.type.rules.required.message"
							)
						}
					]}
				>
					<TypeSelect />
				</Form.Item>
				<Form.Item
					name="defaultValue"
					label={t(
						"admin.categories.edit.actions.fields.addDialog.form.defaultValue.label"
					)}
					required
					rules={[
						{
							required: true,
							message: t(
								"admin.categories.edit.actions.fields.addDialog.form.defaultValue.rules.required.message"
							)
						}
					]}
				>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default AddFieldDialog;
