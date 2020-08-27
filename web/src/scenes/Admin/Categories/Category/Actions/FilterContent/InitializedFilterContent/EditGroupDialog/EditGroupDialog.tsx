import React, { useEffect } from "react";
import Modal from "antd/lib/modal/Modal";
import {
	useGetCategoryFilterGroupQuery,
	useChangeFilterGroupMutation
} from "../../../../../../../../generated/graphql";
import { useParams } from "react-router";
import { Form, Input, Spin, notification } from "antd";
import { useForm } from "antd/lib/form/Form";

interface Props {
	groupId: string;

	visible: boolean;
	onClose: () => void;
}

const EditGroupDialog = ({ groupId, visible, onClose }: Props) => {
	const { data, loading } = useGetCategoryFilterGroupQuery({
		skip: groupId === "",
		variables: {
			categoryId: +(useParams() as any).id,
			groupId
		}
	});

	const [changeGroup] = useChangeFilterGroupMutation();

	const onEdit = async (name: string) => {
		try {
			const {} = await changeGroup({
				variables: {
					groupId,
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

	const [form] = useForm();

	useEffect(() => {
		if (group) {
			form.resetFields();
		}
	}, [group]);

	if (!group && !loading) return null;

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
						initialValue={group?.name}
					>
						<Input />
					</Form.Item>
				</Form>
			</Spin>
		</Modal>
	);
};

export default EditGroupDialog;
