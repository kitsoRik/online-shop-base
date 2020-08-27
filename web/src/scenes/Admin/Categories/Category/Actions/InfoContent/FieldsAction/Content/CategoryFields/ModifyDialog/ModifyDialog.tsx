import React, { useEffect } from "react";
import { useLocationFieldT } from "react-location-query";
import { Modal, Spin, Form, Input, notification } from "antd";
import {
	useChangeFieldInCategoryInfoMutation,
	useGetCategoryInfoFieldQuery
} from "../../../../../../../../../../generated/graphql";
import { useParams } from "react-router";
import { useForm } from "antd/lib/form/Form";

const ModifyDialog = () => {
	const { id } = useParams();
	const categoryId = +id;
	const [infoId] = useLocationFieldT<number>("info");
	const [modify, setModify] = useLocationFieldT<number>("field_modify");

	const [changeField] = useChangeFieldInCategoryInfoMutation();

	const { data, loading } = useGetCategoryInfoFieldQuery({
		skip: modify === -1,
		variables: {
			categoryId,
			infoId,
			fieldId: modify
		}
	});

	const onChangeField = async (name: string = "", value: string = "") => {
		try {
			const {} = await changeField({
				variables: {
					fieldId: modify,
					name,
					value
				}
			});
		} catch (e) {
			console.log(e.message);
		}
		notification.success({ message: "Field has been changed" });

		setModify(-1);
	};

	const field = data?.categories?.[0].info?.[0].fields?.[0];
	console.log(field);

	useEffect(() => {
		if (!field) return;

		form.resetFields();
	}, [field]);

	const [form] = useForm();

	return (
		<Modal
			visible={modify !== -1}
			closable={false}
			onOk={form.submit}
			onCancel={() => setModify(-1)}
		>
			<Spin spinning={loading}>
				<Form
					form={form}
					onFinish={({ name, value }) => onChangeField(name, value)}
				>
					<Form.Item
						name="name"
						label="Name"
						initialValue={field?.name}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name="value"
						label="Value"
						initialValue={field?.value}
					>
						<Input />
					</Form.Item>
				</Form>
			</Spin>
		</Modal>
	);
};

export default ModifyDialog;
