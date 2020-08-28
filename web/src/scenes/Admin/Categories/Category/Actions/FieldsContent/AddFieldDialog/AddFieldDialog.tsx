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
import FieldForm from "../FieldForm";

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
		defaultValue: string,
		options: object
	) => {
		try {
			const {} = await addFieldToCategory({
				variables: { categoryId, name, type, defaultValue, options }
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
			<FieldForm form={form} onFinish={onAddField} />
		</Modal>
	);
};

export default AddFieldDialog;
