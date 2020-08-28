import React, { useEffect } from "react";
import Modal from "antd/lib/modal/Modal";
import {
	CategoryField,
	useGetFieldByIdFromCategoryByIdQuery,
	useChangeFieldInCategoryMutation
} from "../../../../../../../generated/graphql";
import { useLocationFieldT } from "react-location-query";
import { Form, Input, notification } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import TypeSelect from "../TypeSelect";

const ModifyDialog = () => {
	const { t } = useTranslation();
	const { id } = useParams();
	const categoryId = +id;
	const [modify, setModify] = useLocationFieldT<number>("modify");

	const { data, loading } = useGetFieldByIdFromCategoryByIdQuery({
		skip: !modify,
		variables: {
			id: categoryId,
			fieldId: modify
		}
	});

	const [changeField] = useChangeFieldInCategoryMutation();

	const onCancel = () => {
		setModify(-1);
	};

	const category = (data?.categories ?? [null])[0];

	const field = (category?.fields ?? [null])[0];

	useEffect(() => {
		if (!field) return;
		form.resetFields();
	}, [field]);

	const [form] = useForm();

	const handleModify = async (
		name: string,
		type: string,
		defaultValue: string
	) => {
		if (!field) throw new Error("Here field must be not null");
		try {
			const {} = await changeField({
				variables: {
					fieldId: field?.id,
					name,
					type,
					defaultValue
				}
			});

			notification.success({
				message: t(
					"admin.categories.edit.actions.fields.modifyDialog.success",
					{
						replace: {
							name: field.name
						}
					}
				)
			});
		} catch (e) {
			console.error(e.message);
		}

		setModify(-1);
	};

	return (
		<Modal
			visible={modify !== -1}
			onCancel={onCancel}
			closable={false}
			onOk={form.submit}
			okButtonProps={{ disabled: !field }}
			okText={t(
				"admin.categories.edit.actions.fields.modifyDialog.okText"
			)}
			cancelText={t(
				"admin.categories.edit.actions.fields.modifyDialog.cancelText"
			)}
		>
			<Form
				form={form}
				onFinish={({ name, type, defaultValue }) =>
					handleModify(name, type, defaultValue)
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
					initialValue={field?.name}
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
					initialValue={field?.type}
				>
					<TypeSelect />
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
					initialValue={field?.defaultValue}
				>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default ModifyDialog;
