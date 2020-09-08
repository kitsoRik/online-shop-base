import React, { useEffect } from "react";
import Modal from "antd/lib/modal/Modal";
import {
	useGetCategoryFilterGroupFieldQuery,
	useChangeFilterGroupFieldMutation
} from "../../../../../../../../generated/graphql";
import { useParams } from "react-router";
import { Form, Input, Spin, notification } from "antd";
import { useForm } from "antd/lib/form/Form";
import TypeSelect from "../ItemForm/TypeSelect";
import CategoryFieldSelect from "../ItemForm/CategoryFieldSelect";
import ItemForm from "../ItemForm";

interface Props {
	itemId: string;
	groupId: string;

	visible: boolean;
	onClose: () => void;
}

const EditItemDialog = ({ itemId, groupId, visible, onClose }: Props) => {
	const categoryId = +(useParams() as any).id;

	const { data, loading } = useGetCategoryFilterGroupFieldQuery({
		skip: itemId === "",
		variables: {
			categoryId,
			groupId,
			fieldId: itemId
		}
	});

	const [changeGroupField] = useChangeFilterGroupFieldMutation();

	const onEdit = async (
		name: string,
		type: string,
		categoryFieldId: number,
		options: object
	) => {
		try {
			const {} = await changeGroupField({
				variables: {
					fieldId: itemId,
					name,
					type,
					categoryFieldId:
						categoryFieldId !== undefined
							? categoryFieldId
							: item!.categoryField!.id,
					options
				}
			});
			notification.success({ message: "Item has been changed" });
			onClose();
		} catch (e) {
			console.log(e.message);
		}
	};

	const filter = data?.categories?.[0].filter;
	const group = filter?.groups[0];
	const item = group?.fields[0];

	const [form] = useForm();

	useEffect(() => {
		if (group) {
			form.resetFields();
		}
	}, [group]);

	if (!item && !loading) return null;

	return (
		<Modal
			visible={visible}
			onCancel={onClose}
			onOk={form.submit}
			closable={false}
		>
			<Spin spinning={loading}>
				<ItemForm
					form={form}
					onFinish={onEdit}
					categoryId={categoryId}
					initialValues={{
						name: item?.name ?? "",
						categoryField: item?.categoryField,
						type: item?.type ?? "",
						options: item?.options ?? {}
					}}
				/>
			</Spin>
		</Modal>
	);
};

export default EditItemDialog;
