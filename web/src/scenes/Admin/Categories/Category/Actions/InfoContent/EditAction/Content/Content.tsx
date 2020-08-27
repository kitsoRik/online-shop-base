import React, { useEffect } from "react";
import { Form, Button, notification, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useLocationFieldT } from "react-location-query";
import {
	useChangeCategoryInfoMutation,
	useGetCategoryInfoByCategoryIdAndInfoIdQuery
} from "../../../../../../../../generated/graphql";
import { useParams } from "react-router";

interface Props {
	load: boolean;
}

const Content = ({ load }: Props) => {
	const { id } = useParams();
	const categoryId = +id;
	const [infoId] = useLocationFieldT<number>("info");

	const [change] = useChangeCategoryInfoMutation();

	const { data } = useGetCategoryInfoByCategoryIdAndInfoIdQuery({
		variables: { id: categoryId, infoId },
		skip: categoryId === -1
	});

	const onChange = async (name: string) => {
		if (!info) throw new Error("Here category info must be defined");
		try {
			const { data } = await change({
				variables: {
					id: info.id,
					infoId: 1,
					name
				}
			});
			notification.success({ message: "Category info has been changed" });
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
	const category = (data?.categories ?? [null])[0];
	const info = (category?.info ?? [null])[0];

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
						disabled={category === null}
					>
						Change
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default Content;
