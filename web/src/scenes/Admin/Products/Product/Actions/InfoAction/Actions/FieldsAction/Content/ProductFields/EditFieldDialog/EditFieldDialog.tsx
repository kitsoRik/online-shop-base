import React, { useEffect } from "react";
import { useLocationFieldT } from "react-location-query";
import { useForm } from "antd/lib/form/Form";
import { Modal, Form, Input, Spin, notification } from "antd";
import {
	useGetProductInfoFieldQuery,
	useChangeFieldInProductInfoMutation
} from "../../../../../../../../../../../generated/graphql";

const EditFieldDialog = () => {
	const [infoId] = useLocationFieldT<number>("info");
	const [modify, setModify] = useLocationFieldT<number>("modify");

	const { data, loading } = useGetProductInfoFieldQuery({
		skip: modify === -1,
		variables: {
			fieldId: modify,
			infoId
		}
	});

	const [changeField] = useChangeFieldInProductInfoMutation();

	const field = data ? data.products[0]?.info[0]?.fields?.[0] : null;
	const [form] = useForm();

	const onModify = async (name: string, value: string) => {
		if (!field) return;
		try {
			const {} = await changeField({
				variables: {
					id: field.id,
					name,
					value
				}
			});
			notification.success({ message: "Field has been changed" });
		} catch (e) {
			console.log(e.message);
		}
		handleClose();
	};

	useEffect(() => {
		if (!field) return;
		form.resetFields();
	}, [field]);

	const handleClose = () => {
		setModify(-1);
	};

	return (
		<Modal
			visible={modify !== -1}
			onCancel={handleClose}
			onOk={form.submit}
			okText="Modify"
		>
			<Spin spinning={loading}>
				<Form
					form={form}
					onFinish={({ label, value }) => onModify(label, value)}
					layout="vertical"
				>
					<Form.Item
						label="Label"
						name="label"
						required={true}
						initialValue={field?.name}
						rules={[{ required: true }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Value"
						name="value"
						required={true}
						initialValue={field?.value}
						rules={[{ required: true }]}
					>
						<Input />
					</Form.Item>
				</Form>
			</Spin>
		</Modal>
	);
};

export default EditFieldDialog;
