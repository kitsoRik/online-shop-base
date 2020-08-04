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

const ModifyDialog = () => {
	const [categoryId] = useLocationFieldT<number>("category");
	const [modify, setModify] = useLocationFieldT<string>("modify");

	const { data, loading } = useGetFieldByIdFromCategoryByIdQuery({
		skip: !modify,
		variables: {
			categoryId: categoryId,
			fieldId: modify
		}
	});

	const [changeField] = useChangeFieldInCategoryMutation();

	const onCancel = () => {
		setModify("");
	};

	const category = data?.findCategoryById;

	const field: CategoryField | null = (category?.fields ?? [null])[0];

	useEffect(() => {
		if (!field) return;
		form.setFieldsValue({ name: field?.name });
	}, [field]);

	const [form] = useForm();

	const handleModify = async (name: string) => {
		if (!field) throw new Error("Here field must be not null");
		try {
			const {} = await changeField({
				variables: {
					categoryId,
					fieldId: field?.id,
					name
				}
			});

			notification.success({
				message: `Field ${field.name} has been changed`
			});
		} catch (e) {
			console.error(e.message);
		}

		setModify("");
	};

	return (
		<Modal
			visible={!!modify}
			onCancel={onCancel}
			closable={false}
			onOk={() => form.submit()}
			okButtonProps={{ disabled: !field }}
			okText="Modify"
			cancelText="Cancel"
		>
			<Form form={form} onFinish={({ name }) => handleModify(name)}>
				<Form.Item name="name" label="Name">
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default ModifyDialog;
