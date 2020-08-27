import React, { useState, useEffect } from "react";
import { Category } from "../../../../../../generated/graphql";
import { Form, Input, Button, notification } from "antd";
import { useChangeCategoryMutation } from "../../../../../../generated/graphql";
import { useForm } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";

interface Props {
	category: { id: number; name: string } | null;

	load: boolean;
}

const EditContent = ({ category, load }: Props) => {
	const [change] = useChangeCategoryMutation();

	const { t } = useTranslation();

	const onChange = async (name: string) => {
		try {
			const { data } = await change({
				variables: {
					id: category!.id,
					name: name
				}
			});

			notification.success({
				message: t("admin.categories.edit.actions.edit.success")
			});
		} catch (e) {
			switch (e.type) {
				case "UNKNOWN_CATEGORY":
					notification.error({
						message: t(
							"admin.categories.edit.actions.edit.error.unknownCategory"
						)
					});
					break;
			}
		}
	};

	const [form] = useForm();

	useEffect(() => {
		form.resetFields();
	}, [category?.id]);

	if (!category) return null;

	return (
		<>
			<Form form={form} onFinish={({ name }) => onChange(name)}>
				<Form.Item
					label={t(
						"admin.categories.edit.actions.edit.form.name.label"
					)}
					name="name"
					initialValue={category.name}
					required
					rules={[
						{
							required: true,
							message: t(
								"admin.categories.edit.actions.edit.form.name.rules.requiredMessage"
							)
						}
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						{t(
							"admin.categories.edit.actions.edit.form.submit.change"
						)}
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default EditContent;
