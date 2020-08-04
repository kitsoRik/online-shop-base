import React, { useState, useEffect } from "react";
import { Category } from "../../../../../../generated/graphql";
import { Form, Input, Button, notification } from "antd";
import { useChangeCategoryMutation } from "../../../../../../generated/graphql";
import { useForm } from "antd/lib/form/Form";

interface Props {
	category: Category;
}

const EditContent = ({ category }: Props) => {
	const [change] = useChangeCategoryMutation();

	const onChange = async (name: string) => {
		try {
			const { data } = await change({
				variables: {
					id: category.id,
					name: name
				}
			});

			notification.success({ message: "Category has been changed" });
		} catch (e) {
			switch (e.type) {
				case "UNKNOWN_CATEGORY":
					notification.error({
						message: "Internal server error, please reload page"
					});
					break;
			}
		}
	};

	const [form] = useForm();

	useEffect(() => {
		form.resetFields();
	}, [category.id]);

	return (
		<>
			<Form form={form} onFinish={({ name }) => onChange(name)}>
				<Form.Item
					label="Name"
					name="name"
					initialValue={category.name}
					required
					rules={[{ required: true, message: "Name is required" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Change
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default EditContent;
