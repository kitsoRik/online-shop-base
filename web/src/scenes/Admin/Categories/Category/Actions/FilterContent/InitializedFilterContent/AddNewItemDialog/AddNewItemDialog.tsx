import React from "react";
import { Modal, notification } from "antd";
import {
	useAddCategoryFilterGroupMutation,
	useAddFieldToFilterGroupMutation,
	GetCategoryFilterDocument
} from "../../../../../../../../generated/graphql";
import { getOperationName } from "@apollo/client/utilities";
import { useForm } from "antd/lib/form/Form";
import ItemForm from "../ItemForm";

interface Props {
	filterGroupId: string;
	categoryId: number;

	visible: boolean;
	onClose: () => void;
}

const AddNewItemDialog = ({
	filterGroupId,
	categoryId,
	visible,
	onClose
}: Props) => {
	const [addFieldToFilterGroup] = useAddFieldToFilterGroupMutation();

	const onAddField = async (
		name: string,
		type: string,
		categoryFieldId: number
	) => {
		try {
			const {} = addFieldToFilterGroup({
				variables: {
					name,
					type,
					categoryFieldId,
					filterGroupId
				},
				refetchQueries: [getOperationName(GetCategoryFilterDocument)!]
			});
			notification.success({ message: "Field has been added" });
			onClose();
		} catch (e) {
			console.log(e.message);
		}
	};

	const [form] = useForm();

	return (
		<Modal visible={visible} onCancel={onClose} onOk={form.submit}>
			<ItemForm
				form={form}
				onFinish={onAddField}
				categoryId={categoryId}
			/>
		</Modal>
	);
};

export default AddNewItemDialog;
