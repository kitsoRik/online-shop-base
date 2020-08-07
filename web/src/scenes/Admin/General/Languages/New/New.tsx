import React from "react";
import { useAddLanguageMutation } from "../../../../../generated/graphql";
import { Form, Input, Button } from "antd";
import SelectLocales from "../../../../../shared/SelectLocales";
import { useForm } from "antd/lib/form/Form";

const New = () => {
	const [addLanguage] = useAddLanguageMutation();

	const onAddLanguage = async (name: string, code: string) => {
		try {
			const {} = await addLanguage({ variables: { name, code } });
		} catch (e) {
			console.log(e.message);
		}
	};

	const [form] = useForm();

	return (
		<>
			<Form
				form={form}
				onFinish={({ name, code }) => onAddLanguage(name, code)}
			>
				<Form.Item
					label="Name"
					name="name"
					required
					rules={[{ required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Locale"
					name="code"
					required
					rules={[{ required: true }]}
				>
					<SelectLocales />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Add
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default New;
