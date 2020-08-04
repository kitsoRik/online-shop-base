import React from "react";
import { ProductField } from "../../../../../../../../generated/graphql";
import { List } from "antd";
import { useLocationFieldT } from "react-location-query";

interface Props {
	field: ProductField;
}

const FieldItem = ({ field }: Props) => {
	const [productId] = useLocationFieldT<number>("product");

	return (
		<>
			<List.Item actions={[]}>
				<List.Item.Meta description={field.value} />
			</List.Item>
		</>
	);
};

export default FieldItem;
