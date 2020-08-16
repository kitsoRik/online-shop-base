import React from "react";
import { ProductField } from "../../../../../../../../../../../generated/graphql";
import { List } from "antd";
import { useLocationFieldT } from "react-location-query";
import { useParams } from "react-router";

interface Props {
	productField: ProductField;
}

const FieldItem = ({ productField }: Props) => {
	const { id } = useParams();
	const productId = +id;

	return (
		<>
			<List.Item actions={[]}>
				<List.Item.Meta description={productField.value} />
			</List.Item>
		</>
	);
};

export default FieldItem;
