import React from "react";
import {
	CategoryField,
	useRemoveFieldFromCategoryMutation
} from "../../../../../../../generated/graphql";
import { List, Button, Popconfirm, Typography, notification } from "antd";
import confirm from "antd/lib/modal/confirm";
import { WarningTwoTone } from "@ant-design/icons";
import { useLocationFieldT } from "react-location-query";

interface Props {
	categoryId: number;
	field: CategoryField;
}

const FieldItem = ({ categoryId, field }: Props) => {
	const [, setModify] = useLocationFieldT<string>("modify");

	const [removeField] = useRemoveFieldFromCategoryMutation();

	const handleRemove = async () => {
		try {
			const {} = removeField({
				variables: {
					id: categoryId,
					fieldId: field.id
				}
			});
			notification.success({
				message: `Field '${field.name}' has been removed`
			});
		} catch (e) {
			console.warn(e.message);
		}
	};

	const onModifyClick = () => {
		setModify(field.id);
	};

	const onRemoveClick = () => {
		confirm({
			icon: <WarningTwoTone />,
			content: (
				<Typography.Text type="danger">
					Are you want to delete '{field.name}'?
				</Typography.Text>
			),
			okText: "Yes, I want delete it",
			cancelText: "No, just close dialog",
			onOk: handleRemove,
			onCancel() {}
		});
	};

	return (
		<>
			<List.Item
				actions={[
					<Button onClick={onModifyClick}>Modify</Button>,
					<Button onClick={onRemoveClick}>Remove</Button>
				]}
			>
				<List.Item.Meta description={field.name} />
			</List.Item>
		</>
	);
};

export default FieldItem;
