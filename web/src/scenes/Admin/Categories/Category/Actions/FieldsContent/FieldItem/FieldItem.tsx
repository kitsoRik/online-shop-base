import React from "react";
import {
	CategoryField,
	useRemoveFieldFromCategoryMutation
} from "../../../../../../../generated/graphql";
import { List, Button, Popconfirm, Typography, notification } from "antd";
import confirm from "antd/lib/modal/confirm";
import { WarningTwoTone } from "@ant-design/icons";
import { useLocationFieldT } from "react-location-query";
import { useTranslation } from "react-i18next";

interface Props {
	categoryId: number;
	field: CategoryField;
}

const FieldItem = ({ categoryId, field }: Props) => {
	const { t } = useTranslation();
	const [, setModify] = useLocationFieldT<number>("modify");

	const [removeField] = useRemoveFieldFromCategoryMutation();

	const handleRemove = async () => {
		try {
			const {} = removeField({
				variables: {
					fieldId: field.id
				}
			});
			notification.success({
				message: t(
					"admin.categories.edit.fields.field.remove.success",
					{ replace: { name: field.name } }
				)
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
					{t(
						"admin.categories.edit.fields.field.remove.confirm.content",
						{ replace: { name: field.name } }
					)}
				</Typography.Text>
			),
			okText: t(
				"admin.categories.edit.fields.field.remove.confirm.okText"
			),
			cancelText: t(
				"admin.categories.edit.fields.field.remove.confirm.cancelText"
			),
			onOk: handleRemove,
			onCancel() {}
		});
	};

	return (
		<>
			<List.Item
				actions={[
					<Button onClick={onModifyClick}>
						{t(
							"admin.categories.edit.fields.field.remove.actions.modify"
						)}
					</Button>,
					<Button onClick={onRemoveClick}>
						{t(
							"admin.categories.edit.fields.field.remove.actions.remove"
						)}
					</Button>
				]}
			>
				<List.Item.Meta description={field.name} />
			</List.Item>
		</>
	);
};

export default FieldItem;
