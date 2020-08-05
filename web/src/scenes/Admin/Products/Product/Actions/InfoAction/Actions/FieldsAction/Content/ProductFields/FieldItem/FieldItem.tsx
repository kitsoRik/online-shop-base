import React from "react";
import { ProductField } from "../../../../../../../../../../../generated/graphql";
import { List } from "antd";
import { useLocationFieldT } from "react-location-query";

interface Props {
	productField: ProductField;
}

const FieldItem = ({ productField }: Props) => {
	const [productId] = useLocationFieldT<number>("product");

	return (
		<>
			<List.Item actions={[]}>
				<List.Item.Meta description={productField.value} />
			</List.Item>
		</>
	);
};

export default FieldItem;
