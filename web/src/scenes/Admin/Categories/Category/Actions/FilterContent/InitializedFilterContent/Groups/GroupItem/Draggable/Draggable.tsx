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

	onEdit: () => void;
	onAddField: (filterGroupId: string) => void;
}

const Draggable = ({ filterGroup, children, onEdit, onAddField }: Props) => {
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
					onEdit={onEdit}
					onAddField={onAddField}
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
