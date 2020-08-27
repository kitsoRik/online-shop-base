import React from "react";
import {
	ProductInfoField,
	CategoryInfoField
} from "../../../../../../../../../../../generated/graphql";
import { List, Button } from "antd";
import { useLocationFieldT } from "react-location-query";
import { useParams } from "react-router";

interface Props {
	productInfoField: Exclude<
		{ id: number; name?: string | null; value?: string | null },
		ProductInfoField
	>;
}

const FieldItem = ({ productInfoField }: Props) => {
	const [, setModify] = useLocationFieldT<number>("modify");

	return (
		<>
			<List.Item
				actions={[
					<Button onClick={() => setModify(productInfoField.id)}>
						Edit
					</Button>
				]}
			>
				<List.Item.Meta
					description={`${productInfoField.name} - ${productInfoField.value}`}
				/>
			</List.Item>
		</>
	);
};

export default FieldItem;
