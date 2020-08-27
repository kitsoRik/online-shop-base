import React from "react";
import {
	useGetFieldsProductByIdQuery,
	Category,
	ProductInfoField,
	ProductInfo
} from "../../../../../../../../../generated/graphql";
import { Button, List, Tabs } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useLocationField, useLocationFieldT } from "react-location-query";
import FieldItem from "./ProductFields/FieldItem";
import CategoryFields from "./CategoryFields";
import ProductFields from "./ProductFields";
import { useParams } from "react-router";

interface Props {
	load: boolean;
}

const Content = ({ load }: Props) => {
	const { id } = useParams();
	const productId = +id;

	const [infoId] = useLocationFieldT<number>("info");

	const [] = useLocationField("modify", {
		type: "number",
		initial: -1,
		hideIfInitial: true
	});

	const { data, loading } = useGetFieldsProductByIdQuery({
		skip: !load,
		variables: { id: productId }
	});
	if (loading || !load) return null;

	const product = (data?.products || [null])[0];

	if (!product) throw new Error("Unknown category");

	const productInfoFields =
		product.info.find(
			i =>
				i.language.id ===
				product.info.find(i => i.id === infoId)?.language.id
		)?.fields ?? [];

	const categoryFields = product.category.fields ?? [];
	const categoryInfoFields =
		product.category.info.find(
			i =>
				i.language.id ===
				product.info.find(i => i.id === infoId)?.language.id
		)?.fields ?? [];

	return (
		<>
			<CategoryFields
				categoryFields={categoryFields}
				categoryInfoFields={categoryInfoFields}
				productInfoFields={productInfoFields}
			/>
			<ProductFields
				categoryInfoFields={categoryInfoFields}
				productInfoFields={productInfoFields}
			/>
		</>
	);
};

export default Content;
