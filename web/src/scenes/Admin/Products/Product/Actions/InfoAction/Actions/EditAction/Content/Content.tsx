import React, { useEffect } from "react";
import { Form, Button, notification, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useLocationFieldT } from "react-location-query";
import {
	useChangeProductInfoMutation,
	useGetProductInfoByProductIdAndInfoIdQuery
} from "../../../../../../../../../generated/graphql";
import { useParams } from "react-router";

interface Props {
	load: boolean;
}

const Content = ({ load }: Props) => {
	const { id } = useParams();
	const productId = +id;
	const [infoId] = useLocationFieldT<number>("info");

	const [change] = useChangeProductInfoMutation();

	const { data } = useGetProductInfoByProductIdAndInfoIdQuery({
		variables: { id: productId, infoId },
		skip: productId === -1
	});

	const onChange = async (name: string) => {
		if (!info) throw new Error("Here product info must be defined");
		try {
			const { data } = await change({
				variables: {
					id: info.id,
					infoId: 1,
					name
				}
			});
			notification.success({ message: "Product info has been changed" });
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
	const info = (product?.info ?? [null])[0];

	useEffect(() => {
		form.resetFields();
	}, [info]);

	return (
		<>
			<Form form={form} onFinish={({ name }) => onChange(name)}>
				<Form.Item name="name" label="Name" initialValue={info?.name}>
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
