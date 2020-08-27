import React from "react";
import {
	CategoryField,
	useInitializeCategoryInfoFieldMutation,
	GetFieldsCategoryInfoByIdDocument
} from "../../../../../../../../../../../generated/graphql";
import { List, Button } from "antd";
import { useLocationFieldT } from "react-location-query";
import { getOperationName } from "@apollo/client/utilities";

interface Props {
	categoryField: CategoryField;
}

const UnInitializedItem = ({ categoryField }: Props) => {
	const [infoId] = useLocationFieldT<number>("info");

	const [
		initializeCategoryInfoField
	] = useInitializeCategoryInfoFieldMutation();

	const OnInitialize = async () => {
		try {
			const {} = await initializeCategoryInfoField({
				variables: {
					categoryInfoId: infoId,
					categoryFieldId: categoryField.id
				},
				refetchQueries: [
					getOperationName(GetFieldsCategoryInfoByIdDocument)!
				]
			});
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<>
			<List.Item
				actions={[
					<Button type="primary" onClick={OnInitialize}>
						Initialize
					</Button>
				]}
			>
				<List.Item.Meta
					title={categoryField.name}
					description="Uninialized"
				/>
			</List.Item>
		</>
	);
};

export default UnInitializedItem;
