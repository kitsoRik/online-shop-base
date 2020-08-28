import React from "react";
import {
	CategoryField,
	CategoryInfoField
} from "../../../../../../../../../../../generated/graphql";
import { List, Button, Typography } from "antd";
import { useLocationFieldT } from "react-location-query";

interface Props {
	categoryField: Exclude<{ id: number; name: string }, CategoryField>;
	categoryInfoField: Exclude<
		{ id: number; name: string },
		CategoryInfoField
	>;
}

const InitializedItem = ({ categoryField, categoryInfoField }: Props) => {
	const [, setModify] = useLocationFieldT<number>("field_modify");

	return (
		<>
			<List.Item
				actions={[
					[
						<Button
							onClick={() =>
								setModify(categoryInfoField.id ?? -1)
							}
						>
							Edit
						</Button>
					]
				]}
			>
				<List.Item.Meta
					title={categoryField.name}
					description={
						<Typography.Text>
							{categoryInfoField.name}
						</Typography.Text>
					}
				/>
			</List.Item>
		</>
	);
};

export default InitializedItem;
