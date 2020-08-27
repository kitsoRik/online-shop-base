import React from "react";
import Page from "../../../../shared/Page";
import Form from "./Form";
import { useCreateProductMutation } from "../../../../generated/graphql";
import { FormInstance } from "antd/lib/form";
import { notification } from "antd";

const Create = () => {
	const [createProduct] = useCreateProductMutation();

	const onCreate = async (categoryId: number, form: FormInstance) => {
		try {
			const { data } = await createProduct({
				variables: { categoryId }
			});

			notification.success({
				message: `Product has been created`
			});

			form.resetFields();
		} catch (e) {
			console.error(e.message);
		}
	};

	return (
		<Page>
			<Form onCreate={onCreate} />
		</Page>
	);
};

export default Create;
