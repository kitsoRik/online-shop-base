import React from "react";
import {
	ProductField,
	CategoryField
} from "../../../../../../../../../../../generated/graphql";
import { List, Typography } from "antd";
import { useLocationFieldT } from "react-location-query";

interface Props {
	productField?: ProductField;
	categoryField: CategoryField;
}

const FieldItem = ({ productField, categoryField }: Props) => {
	const [productId] = useLocationFieldT<number>("product");

	return (
		<>
			<List.Item actions={[]}>
				<List.Item.Meta
					description={
						<Typography.Text>
							{categoryField.name}{" "}
							{productField ?? "Has not value"}
						</Typography.Text>
					}
				/>
			</List.Item>
		</>
	);
};

export default FieldItem;
