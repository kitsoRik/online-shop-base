import React, { useState } from "react";
import { Form, Input } from "antd";
import CategoryFieldSelect from "./CategoryFieldSelect";
import TypeSelect from "./TypeSelect";
import { FormInstance } from "antd/lib/form";
import Options from "./Options";

interface Props {
	form: FormInstance;
	onFinish: (
		name: string,
		type: string,
		categoryField: number,
		options: object
	) => void;

	categoryId: number;

	initialValues?: {
		name: string;
		type: string;
		categoryField?: {
			id: number;
			type: string;
		} | null;
		options: object;
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
			onFinish={({ name, type, categoryField, options }) =>
				onFinish(name, type, categoryField.id, options)
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
					categoryFieldType={
						categoryField?.type ||
						initialValues?.categoryField?.type
					}
				/>
			</Form.Item>

			<Form.Item label="Options" shouldUpdate>
				{() => {
					return (
						<Options
							fieldType={
								form.getFieldValue("type") ||
								initialValues?.type
							}
							initialOptions={initialValues?.options}
						/>
					);
				}}
			</Form.Item>
		</Form>
	);
};

export default ItemForm;
