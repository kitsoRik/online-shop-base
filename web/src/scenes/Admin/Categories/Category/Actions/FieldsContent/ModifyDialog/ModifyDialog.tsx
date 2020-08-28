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
import FieldForm from "../FieldForm";

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
		defaultValue: string,
		options: object
	) => {
		if (!field) throw new Error("Here field must be not null");
		try {
			const {} = await changeField({
				variables: {
					fieldId: field?.id,
					name,
					type,
					defaultValue,
					options
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
			<FieldForm
				form={form}
				onFinish={handleModify}
				initialValues={field ?? undefined}
			/>
		</Modal>
	);
};

export default ModifyDialog;
