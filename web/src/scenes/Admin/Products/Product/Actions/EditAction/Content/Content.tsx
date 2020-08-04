import React, { useState, useEffect } from "react";
import { Category } from "../../../../../../../generated/graphql";
import { Form, Input, Button, notification } from "antd";
import {
	useChangeProductMutation,
	useGetProductByIdQuery
} from "../../../../../../../generated/graphql";
import { useForm } from "antd/lib/form/Form";
import { useLocationFieldT } from "react-location-query";

interface Props {
	load: boolean;
}

const Content = ({ load }: Props) => {
	const [productId] = useLocationFieldT<number>("product");

	const [change] = useChangeProductMutation();

	const { data } = useGetProductByIdQuery({
		variables: { id: productId },
		skip: productId === -1
	});

	const onChange = async (name: string) => {
		if (!product) throw new Error("Here product must be defined");
		try {
			const { data } = await change({
				variables: {
					id: product.id,
					name: name
				}
			});
			notification.success({ message: "Product has been changed" });
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
	const product = (data?.products ?? [null])[0];

	useEffect(() => {
		form.resetFields();
	}, [product]);

	console.log(product);

	return (
		<>
			<Form form={form} onFinish={({ name }) => onChange(name)}>
				<Form.Item
					label="Name"
					name="name"
					initialValue={product?.name}
					required
					rules={[{ required: true, message: "Name is required" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						disabled={product === null}
					>
						Change
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default Content;
