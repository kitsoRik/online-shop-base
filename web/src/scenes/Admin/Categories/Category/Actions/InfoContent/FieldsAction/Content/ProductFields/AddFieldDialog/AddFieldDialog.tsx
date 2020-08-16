import React from "react";
import { Modal, Form, Input } from "antd";
import { useLocationFieldT } from "react-location-query";
import { useForm } from "antd/lib/form/Form";

const AddFieldDialog = () => {
	const [add, setAdd] = useLocationFieldT<boolean>("add");

	const [form] = useForm();

	return (
		<Modal visible={add} onCancel={() => setAdd(false)}>
			<Form layout="vertical" >
				<Form.Item
					label="Label"
					name="label"
					required={true}
					rules={[{ required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Value"
					name="value"
					required={true}
					rules={[{ required: true }]}
				>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default AddFieldDialog;
