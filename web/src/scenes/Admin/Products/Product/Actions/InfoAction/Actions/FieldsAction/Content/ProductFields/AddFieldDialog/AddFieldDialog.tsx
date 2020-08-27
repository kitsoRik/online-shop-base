import React from "react";
import { Modal, Form, Input } from "antd";
import { useLocationFieldT } from "react-location-query";
import { useForm } from "antd/lib/form/Form";
import { useAddFieldToProductInfoMutation } from "../../../../../../../../../../../generated/graphql";

const AddFieldDialog = () => {
	const [infoId] = useLocationFieldT<number>("info");
	const [add, setAdd] = useLocationFieldT<boolean>("add");

	const [addField] = useAddFieldToProductInfoMutation();

	const onAdd = async (label: string, value: string) => {
		try {
			const {} = await addField({
				variables: {
					productInfoId: infoId,
					label,
					value
				}
			});
		} catch (e) {
			console.log(e.message);
		}
	};

	const [form] = useForm();

	return (
		<Modal visible={add} onCancel={() => setAdd(false)} onOk={form.submit}>
			<Form
				form={form}
				onFinish={({ label, value }) => onAdd(label, value)}
				layout="vertical"
			>
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
