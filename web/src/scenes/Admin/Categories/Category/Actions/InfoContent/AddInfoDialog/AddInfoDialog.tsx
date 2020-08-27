import React from "react";
import { Modal, Form, Input, notification } from "antd";
import { useLocationFieldT } from "react-location-query";
import {
	useAddCategoryInfoToCategoryMutation,
	useGetCategoryInfoLanguagesQuery
} from "../../../../../../../generated/graphql";
import { useForm } from "antd/lib/form/Form";
import InputLanguage from "../../../../../../../shared/InputLanguage";
import { useParams } from "react-router";

const AddInfoDialog = () => {
	const [addInfo, setAddInfo] = useLocationFieldT<boolean>("addInfo");
	const { id } = useParams();
	const categoryId = +id;

	const { data } = useGetCategoryInfoLanguagesQuery({
		variables: { id: categoryId }
	});
	const [addCategoryInfo] = useAddCategoryInfoToCategoryMutation();

	const onAddCategoryInfo = async (languageId: number) => {
		try {
			const {} = await addCategoryInfo({
				variables: { id: categoryId, languageId }
			});
			notification.success({ message: "New language has been added" });
			setAddInfo(false);
		} catch (e) {}
	};

	const category = (data?.categories || [null])[0];
	const languageCodes = category?.info.map(i => i.language.code);
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
				onFinish={({ language }) => onAddCategoryInfo(language)}
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
