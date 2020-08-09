import React from "react";
import Modal from "antd/lib/modal/Modal";
import { Form, Input, Button, notification } from "antd";
import { useLocationFieldT } from "react-location-query";
import {
	useAddFieldToCategoryMutation,
	Category
} from "../../../../../../../generated/graphql";
import { useForm } from "antd/lib/form/Form";

const AddFieldDialog = () => {
	const [categoryId] = useLocationFieldT<number>("category");
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
			notification.success({ message: `Field '${name}' has been added` });
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
					<Button onClick={form.submit}>Add field</Button>
				</Form.Item>
			}
		>
			<Form form={form} onFinish={({ name }) => onAddField(name)}>
				<Form.Item
					name="name"
					label="Name"
					required
					rules={[{ required: true }]}
				>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default AddFieldDialog;