import React from "react";
import {
	useAddFieldToFilterGroupMutation,
	GetCategoryFilterDocument
} from "../../../../../../../../../generated/graphql";
import { Button } from "antd";
import { getOperationName } from "@apollo/client/utilities";

interface Props {
	filterGroup: { id: string };
	provided: any;
	getListStyle: any;
	snapshot: any;

	children: any;
}

const GroupItem = ({
	filterGroup,
	snapshot,
	provided,
	getListStyle,
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
			style={getListStyle(snapshot.isDraggingOver)}
			{...provided.droppableProps}
		>
			<div>
				<Button onClick={onAddField}>Add new field</Button>
			</div>
			{children}
			{provided.placeholder}
		</div>
	);
};

export default GroupItem;
