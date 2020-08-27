import React from "react";
import { Button } from "antd";
import {
	useAddFieldToFilterGroupMutation,
	GetCategoryFilterDocument
} from "../../../../../../../../../../generated/graphql";
import { getOperationName } from "@apollo/client/utilities";
import { Draggable as DNDDraggable } from "react-beautiful-dnd";
import GroupItem from "../GroupItem";

interface Props {
	filterGroup: { id: string; index: number; name: string };

	children: any;
}

const Draggable = ({ filterGroup, children }: Props) => {
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
		<DNDDraggable
			key={filterGroup.id}
			draggableId={filterGroup.id.toString()}
			index={filterGroup.index}
		>
			{(provided, snapshot) => (
				<GroupItem
					filterGroup={filterGroup}
					onEnterToDrop={() => {}}
					props={{
						ref: provided.innerRef,
						...provided.draggableProps,
						...provided.dragHandleProps
					}}
				>
					{children}
					{(provided as any).placeholder}
				</GroupItem>
			)}
		</DNDDraggable>
	);
};

export default Draggable;
