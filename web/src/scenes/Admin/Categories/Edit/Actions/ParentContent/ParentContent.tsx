import React from "react";
import {
	Category,
	useGetParentCategoryByIdQuery
} from "../../../../../../generated/graphql";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
	category: Category | null;

	load: boolean;
}

const ParentContent = ({ category, load }: Props) => {
	const { t } = useTranslation();
	const { data } = useGetParentCategoryByIdQuery({
		skip: !load,
		variables: { id: category?.id || -1 }
	});

	const _category = (data?.categories ?? [null])[0];

	if (!_category) return null;

	const parentCategory = category?.parent;
	if (!parentCategory)
		return (
			<Typography.Text>
				{t("admin.categories.edit.actions.parent.empty")}
			</Typography.Text>
		);

	return (
		<>
			<Typography.Text>
				{t("admin.categories.edit.actions.parent.name", {
					replace: { name: parentCategory.name }
				})}
			</Typography.Text>
			<br />
			<Typography.Link>
				<Link
					to={`/admin/categories/edit?category=${parentCategory.id}`}
				>
					{t("admin.categories.edit.actions.parent.goto")}
				</Link>
			</Typography.Link>
		</>
	);
};

export default ParentContent;
