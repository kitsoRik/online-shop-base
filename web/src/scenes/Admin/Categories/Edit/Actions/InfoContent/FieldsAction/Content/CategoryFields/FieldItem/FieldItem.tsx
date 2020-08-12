import React from "react";
import { CategoryField } from "../../../../../../../../../../generated/graphql";
import { List, Typography } from "antd";
import { useLocationFieldT } from "react-location-query";

interface Props {
	categoryField: CategoryField;
}

const FieldItem = ({ categoryField }: Props) => {
	const [categoryId] = useLocationFieldT<number>("category");

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
