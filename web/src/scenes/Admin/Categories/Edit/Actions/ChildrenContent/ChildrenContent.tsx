import React from "react";
import {
	Category,
	useGetChildrenCategoryByIdQuery
} from "../../../../../../generated/graphql";
import { Button, Typography } from "antd";
import { useQueryPush } from "react-location-query";

interface Props {
	category: Category;
}

const ChildrenContent = ({ category: { id } }: Props) => {
	const { data } = useGetChildrenCategoryByIdQuery({
		variables: { id }
	});

	const category = data?.findCategoryById;

	const queryPush = useQueryPush();

	if (!category) return null;

	const children = category.children ?? [];

	if (children.length === 0) {
		return <Typography.Text>Has no subcategories</Typography.Text>;
	}

	const onChildCategoryClick = (id: number) => {
		queryPush("/admin/categories/edit", { category: id });
	};

	return (
		<>
			{children.map(childCategory => (
				<Button onClick={() => onChildCategoryClick(childCategory.id)}>
					{childCategory.name}
				</Button>
			))}
		</>
	);
};

export default ChildrenContent;
