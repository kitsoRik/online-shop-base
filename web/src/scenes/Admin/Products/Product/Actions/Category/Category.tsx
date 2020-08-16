import React, { useState } from "react";
import { Link, useLocationFieldT } from "react-location-query";
import { useGetProductCategoryByProductIdQuery } from "../../../../../../generated/graphql";
import { Button } from "antd";
import ChangeDialog from "./ChangeDialog";

const Category = () => {
	const [isChange, setIsChange] = useState(false);
	const [productId] = useLocationFieldT<number>("product");

	const { data } = useGetProductCategoryByProductIdQuery({
		variables: {
			id: productId
		}
	});

	const product = (data?.products || [null])[0];

	const category = product?.category;

	if (!category) return null;

	return (
		<>
			<Link
				to={`/admin/categories/${category?.id}`}
				query={{ category: category?.id }}
			>
				Link to category page
			</Link>
			<Button onClick={() => setIsChange(true)}>Change</Button>
			<ChangeDialog
				visible={isChange}
				onClose={() => setIsChange(false)}
				categoryId={category.id}
			/>
		</>
	);
};

export default Category;
