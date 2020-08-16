import React from "react";
import {
	Category,
	useGetChildrenCategoryByIdQuery
} from "../../../../../../generated/graphql";
import { Button, Typography } from "antd";
import { useQueryPush } from "react-location-query";
import { useTranslation } from "react-i18next";

interface Props {
	category: { id: number } | null;

	load: boolean;
}

const ChildrenContent = ({ category: categoryP, load }: Props) => {
	const { t } = useTranslation();
	const { data } = useGetChildrenCategoryByIdQuery({
		skip: !load || !categoryP,
		variables: { id: categoryP?.id ?? -1 }
	});

	const category = (data?.categories ?? [null])[0];

	const queryPush = useQueryPush();

	if (!category) return null;

	const children = category.children ?? [];

	if (children.length === 0) {
		return (
			<Typography.Text>
				{t("admin.categories.edit.actions.children.empty")}
			</Typography.Text>
		);
	}

	const onChildCategoryClick = (id: number) => {
		queryPush(`/admin/categories/${category}`, { });
	};

	return (
		<>
			{children.map(childCategory => (
				<Button
					key={childCategory.id}
					onClick={() => onChildCategoryClick(childCategory.id)}
				>
					{childCategory.name}
				</Button>
			))}
		</>
	);
};

export default ChildrenContent;
