import React from "react";
import { Button } from "antd";
import {
	useAddFieldToFilterGroupMutation,
	GetCategoryFilterDocument
} from "../../../../../../../../../../generated/graphql";
import { getOperationName } from "@apollo/client/utilities";

interface Props {
	filterGroup: { id: string };
	provided?: any;
	getListStyle: any;
	snapshot?: any;

	children: any;
}

const Draggable = ({
	snapshot,
	provided,
	getListStyle,
	filterGroup,
	children
}: Props) => {
	const [addFieldToFilterGroup] = useAddFieldToFilterGroupMutation();

	const onAddField = async () => {
		try {
			const {} = addFieldToFilterGroup({
				variables: {
					name: "GroupItem1",
					filterGroupId: filterGroup.id
				},
				refetchQueries: [getOperationName(GetCategoryFilterDocument)!]
			});
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<div
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
		>
			<div>
				<Button onClick={onAddField}>Add new field</Button>
			</div>
			{children}
			{provided.placeholder}
		</div>
	);
};

export default Draggable;
