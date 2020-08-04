import React from "react";
import {
	Category,
	useGetParentCategoryByIdQuery
} from "../../../../../../generated/graphql";
import { Typography } from "antd";
import { Link } from "react-router-dom";

interface Props {
	category: Category;

	load: boolean;
}

const ParentContent = ({ category: { id }, load }: Props) => {
	const { data } = useGetParentCategoryByIdQuery({
		skip: !load,
		variables: { id }
	});

	const category = data?.findCategoryById;

	if (!category) return null;

	const parentCategory = category?.parent;
	if (!parentCategory)
		return <Typography.Text>Has no parent category</Typography.Text>;

	return (
		<>
			<Typography.Text>Name: {parentCategory.name}</Typography.Text>
			<br />
			<Typography.Link>
				<Link
					to={`/admin/categories/edit?category=${parentCategory.id}`}
				>
					Go to parent
				</Link>
			</Typography.Link>
		</>
	);
};

export default ParentContent;
