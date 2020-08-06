import React from "react";
import { Modal, Form, Input, notification } from "antd";
import { useLocationFieldT } from "react-location-query";
import { useAddProductInfoToProductMutation } from "../../../../../../../../generated/graphql";
import { useForm } from "antd/lib/form/Form";

const AddInfoDialog = () => {
	const [addInfo, setAddInfo] = useLocationFieldT<boolean>("addInfo");
	const [productId] = useLocationFieldT<number>("product");

	const [addProductInfo] = useAddProductInfoToProductMutation();

	const onAddProductInfo = async (language: string) => {
		try {
			const {} = await addProductInfo({
				variables: { id: productId, language }
			});
			notification.success({ message: "New language has been added" });
			setAddInfo(false);
		} catch (e) {}
	};

	const [form] = useForm();

	return (
		<Modal
			visible={addInfo}
			closable={false}
			onCancel={() => setAddInfo(false)}
			onOk={() => form.submit()}
			okText="Add"
		>
			<Form
				form={form}
				onFinish={({ language }) => onAddProductInfo(language)}
			>
				<Form.Item
					label="Language"
					name="language"
					required
					rules={[{ required: true }]}
				>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default AddInfoDialog;
