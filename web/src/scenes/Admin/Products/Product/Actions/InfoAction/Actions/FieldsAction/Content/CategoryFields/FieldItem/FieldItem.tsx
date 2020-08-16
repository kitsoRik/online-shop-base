import React from "react";
import {
	ProductField,
	CategoryField
} from "../../../../../../../../../../../generated/graphql";
import { List, Typography } from "antd";
import { useLocationFieldT } from "react-location-query";
import { useParams } from "react-router";

interface Props {
	productField?: ProductField;
	categoryField: CategoryField;
}

const FieldItem = ({ productField, categoryField }: Props) => {
	const { id } = useParams();
	const productId = +id;

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
