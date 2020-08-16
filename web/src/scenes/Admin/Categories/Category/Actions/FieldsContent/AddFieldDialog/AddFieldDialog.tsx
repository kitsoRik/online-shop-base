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

const AddFieldDialog = () => {
	const { t } = useTranslation();
	const { id } = useParams();
	const categoryId = +id;
	const [add, setAdd] = useLocationFieldT<boolean>("add");

	const [addFieldToCategory] = useAddFieldToCategoryMutation();

	const handleClose = () => {
		setAdd(false);
	};

	const onAddField = async (name: string) => {
		try {
			const {} = await addFieldToCategory({
				variables: { id: categoryId, name }
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
			<Form form={form} onFinish={({ name }) => onAddField(name)}>
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
			</Form>
		</Modal>
	);
};

export default AddFieldDialog;
