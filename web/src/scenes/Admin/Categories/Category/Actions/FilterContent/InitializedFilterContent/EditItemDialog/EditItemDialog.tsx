import React, { useEffect } from "react";
import Modal from "antd/lib/modal/Modal";
import {
	useGetCategoryFilterGroupFieldQuery,
	useChangeFilterGroupFieldMutation
} from "../../../../../../../../generated/graphql";
import { useParams } from "react-router";
import { Form, Input, Spin, notification } from "antd";
import { useForm } from "antd/lib/form/Form";

interface Props {
	itemId: string;
	groupId: string;

	visible: boolean;
	onClose: () => void;
}

const EditItemDialog = ({ itemId, groupId, visible, onClose }: Props) => {
	const { data, loading } = useGetCategoryFilterGroupFieldQuery({
		skip: itemId === "",
		variables: {
			categoryId: +(useParams() as any).id,
			groupId,
			fieldId: itemId
		}
	});

	const [changeGroup] = useChangeFilterGroupFieldMutation();

	const onEdit = async (name: string) => {
		try {
			const {} = await changeGroup({
				variables: {
					fieldId: itemId,
					name
				}
			});
			notification.success({ message: "Group has been changed" });
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
				<Form form={form} onFinish={({ name }) => onEdit(name)}>
					<Form.Item
						label="Name"
						name="name"
						initialValue={item?.name}
					>
						<Input />
					</Form.Item>
				</Form>
			</Spin>
		</Modal>
	);
};

export default EditItemDialog;
