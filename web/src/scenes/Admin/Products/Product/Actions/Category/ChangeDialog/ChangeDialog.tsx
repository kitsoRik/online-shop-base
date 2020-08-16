import React from "react";
import { Modal, Form, notification } from "antd";
import FormItem from "antd/lib/form/FormItem";
import InputCategory from "../../../../../../../shared/InputCategory";
import { useChangeCategoryInProductMutation } from "../../../../../../../generated/graphql";
import { useLocationFieldT } from "react-location-query";
import { useForm } from "antd/lib/form/Form";
import { useParams } from "react-router";

interface Props {
	categoryId: number;

	visible: boolean;
	onClose: () => void;
}

const ChangeDialog = ({ categoryId, visible, onClose }: Props) => {
	const { id } = useParams();
	const productId = +id;

	const [changeCategory] = useChangeCategoryInProductMutation();

	const onChange = async (categoryId: number) => {
		try {
			const {} = await changeCategory({
				variables: {
					productId,
					categoryId
				}
			});

			notification.success({ message: "Category has been changed" });
			onClose();
		} catch (e) {
			console.log(e.message);
		}
	};

	const [form] = useForm();

	return (
		<Modal
			visible={visible}
			closable={false}
			onCancel={onClose}
			onOk={() => form.submit()}
			okText="Change"
			title="Change category"
		>
			<Form form={form} onFinish={({ category }) => onChange(category)}>
				<FormItem label="Category" name="category">
					<InputCategory />
				</FormItem>
			</Form>
		</Modal>
	);
};

export default ChangeDialog;
