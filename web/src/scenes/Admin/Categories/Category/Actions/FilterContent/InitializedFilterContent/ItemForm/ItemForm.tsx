import React, { useState } from "react";
import { Form, Input } from "antd";
import CategoryFieldSelect from "./CategoryFieldSelect";
import TypeSelect from "./TypeSelect";
import { FormInstance } from "antd/lib/form";

interface Props {
	form: FormInstance;
	onFinish: (name: string, type: string, categoryField: number) => void;

	categoryId: number;

	initialValues?: {
		name: string;
		type: string;
		categoryField?: {
			id: number;
			type: string;
		} | null;
	};
}

const ItemForm = ({ form, onFinish, categoryId, initialValues }: Props) => {
	const [categoryField, setCategoryField] = useState<{
		id: number;
		type: string;
	} | null>(null);

	return (
		<Form
			form={form}
			onFinish={({ name, type, categoryField }) =>
				onFinish(name, type, categoryField.id)
			}
		>
			<Form.Item
				label="Name"
				name="name"
				initialValue={initialValues?.name}
			>
				<Input />
			</Form.Item>
			{categoryId && (
				<Form.Item
					label="Category field"
					name="categoryField"
					initialValue={initialValues?.categoryField?.id}
				>
					<CategoryFieldSelect
						categoryId={categoryId}
						onChangeField={setCategoryField}
					/>
				</Form.Item>
			)}
			<Form.Item
				label="Type"
				name="type"
				initialValue={initialValues?.type}
			>
				<TypeSelect
					fieldType={
						initialValues?.categoryField?.type ||
						categoryField?.type
					}
				/>
			</Form.Item>
		</Form>
	);
};

export default ItemForm;
