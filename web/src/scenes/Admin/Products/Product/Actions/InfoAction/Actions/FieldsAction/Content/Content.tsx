import React from "react";
import {
	useGetFieldsProductByIdQuery,
	Category,
	ProductField
} from "../../../../../../../../../generated/graphql";
import { Button, List, Tabs } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useLocationField, useLocationFieldT } from "react-location-query";
import FieldItem from "./ProductFields/FieldItem";
import CategoryFields from "./CategoryFields";
import ProductFields from "./ProductFields";

interface Props {
	load: boolean;
}

const Content = ({ load }: Props) => {
	const [productId] = useLocationFieldT<number>("product");

	const [] = useLocationField("modify", {
		type: "string",
		initial: "",
		hideIfInitial: true
	});

	const { data, loading } = useGetFieldsProductByIdQuery({
		skip: !load,
		variables: { id: productId }
	});
	if (loading || !load) return null;

	const product = (data?.products || [null])[0];

	if (!product) throw new Error("Unknown category");

	const productFields: ProductField[] = [];
	const categoryFields = product.category.fields ?? [];

	return (
		<>
			<CategoryFields
				categoryFields={categoryFields}
				productFields={productFields}
			/>
			<ProductFields
				categoryFields={categoryFields}
				productFields={productFields}
			/>
		</>
	);
};

export default Content;
