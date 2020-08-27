import React from "react";
import { useAddLanguageMutation } from "../../../../../generated/graphql";
import { Form, Input, Button } from "antd";
import SelectLocales from "../../../../../shared/SelectLocales";
import { useForm } from "antd/lib/form/Form";

const New = () => {
	const [addLanguage] = useAddLanguageMutation();

	const onAddLanguage = async (code: string) => {
		try {
			const {} = await addLanguage({ variables: { code } });
		} catch (e) {
			console.log(e.message);
		}
	};

	const [form] = useForm();

	return (
		<>
			<Form form={form} onFinish={({ code }) => onAddLanguage(code)}>
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
