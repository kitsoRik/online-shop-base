import React from "react";
import { CategoryField } from "../../../../../../../../../../generated/graphql";
import { List } from "antd";
import { useLocationFieldT } from "react-location-query";

interface Props {
	categoryField: CategoryField;
}

const FieldItem = ({ categoryField }: Props) => {
	const [categoryId] = useLocationFieldT<number>("category");

	return (
		<>
			<List.Item actions={[]}>
				<List.Item.Meta description={categoryField.name} />
			</List.Item>
		</>
	);
};

export default FieldItem;
