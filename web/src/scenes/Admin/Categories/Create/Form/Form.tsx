import React from "react";
import { Form as FormD, Input, Button, Select } from "antd";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import InputCategory from "../../../../../shared/InputCategory";
import { useForm } from "antd/lib/form/Form";
import { useTranslation } from "react-i18next";

interface Props {
	onCreate: (
		name: string,
		description: string,
		level: number,
		parentId?: number
	) => void;
}

const Form = ({ onCreate }: Props) => {
	const [form] = useForm();

	const { t } = useTranslation();

	return (
		<FormD
			form={form}
			onFinish={({ name, description, level, parent }) => {
				onCreate(name, description, level, parent);
			}}
			layout="vertical"
		>
			<FormD.Item
				name="name"
				label={t("admin.categories.create.form.name.label")}
			>
				<Input
					size="large"
					placeholder={t(
						"admin.categories.create.form.name.placeholder"
					)}
					prefix={<UserOutlined />}
					required
				/>
			</FormD.Item>
			<FormD.Item
				name="description"
				label={t("admin.categories.create.form.description.label")}
			>
				<Input
					size="large"
					placeholder={t(
						"admin.categories.create.form.description.label"
					)}
				/>
			</FormD.Item>
			<FormD.Item>
				<Select>
					<Select.Option value={0}>root</Select.Option>
					<Select.Option value={1}>1</Select.Option>
					<Select.Option value={2}>2</Select.Option>
				</Select>
				<FormD.Item
					name="parent"
					label={t("admin.categories.create.form.parent.label")}
				>
					<InputCategory />
				</FormD.Item>
			</FormD.Item>
			<FormD.Item>
				<Button type="dashed" block>
					<PlusOutlined />
					{t("admin.categories.create.form.fields.addField")}
				</Button>
			</FormD.Item>
			<FormD.Item>
				<Button type="primary" htmlType="submit">
					{t("admin.categories.create.form.submit.create")}
				</Button>
			</FormD.Item>
		</FormD>
	);
};

export default Form;
