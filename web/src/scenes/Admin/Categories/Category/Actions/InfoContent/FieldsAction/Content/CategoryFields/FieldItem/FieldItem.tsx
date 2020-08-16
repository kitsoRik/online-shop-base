import React from "react";
import { CategoryField } from "../../../../../../../../../../generated/graphql";
import { List, Typography } from "antd";
import { useLocationFieldT } from "react-location-query";
import { useParams } from "react-router";

interface Props {
	categoryField: CategoryField;
}

const FieldItem = ({ categoryField }: Props) => {
	const { id } = useParams();
	const categoryId = +id;

	return (
		<>
			<List.Item actions={[]}>
				<List.Item.Meta
					description={
						<Typography.Text>
							{categoryField.name}{" "}
							{categoryField ?? "Has not value"}
						</Typography.Text>
					}
				/>
			</List.Item>
		</>
	);
};

export default FieldItem;
