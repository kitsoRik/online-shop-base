import React from "react";
import { Modal, Form, Input, notification } from "antd";
import { useLocationFieldT } from "react-location-query";
import {
	useAddProductInfoToProductMutation,
	useGetProductInfoLanguagesQuery
} from "../../../../../../../../generated/graphql";
import { useForm } from "antd/lib/form/Form";
import InputLanguage from "../../../../../../../../shared/InputLanguage";
import { useParams } from "react-router";

const AddInfoDialog = () => {
	const [addInfo, setAddInfo] = useLocationFieldT<boolean>("addInfo");
	const { id } = useParams();
	const productId = +id;

	const { data } = useGetProductInfoLanguagesQuery({
		variables: { id: productId }
	});
	const [addProductInfo] = useAddProductInfoToProductMutation();

	const onAddProductInfo = async (languageId: number) => {
		try {
			const {} = await addProductInfo({
				variables: { id: productId, languageId }
			});
			notification.success({ message: "New language has been added" });
			setAddInfo(false);
		} catch (e) {}
	};

	const product = (data?.products || [null])[0];
	const languageCodes = product?.info.map(i => i.language.code);
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
					<InputLanguage.App exceptCodes={languageCodes} />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default AddInfoDialog;
