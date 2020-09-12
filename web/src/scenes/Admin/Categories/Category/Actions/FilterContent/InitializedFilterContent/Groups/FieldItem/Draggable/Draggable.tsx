import React from "react";
import { FilterField } from "../../../../../../../../../../generated/graphql";
import { Draggable as DNDDraggable } from "react-beautiful-dnd";
import FieldItem from "../FieldItem";

interface Props {
	item: Exclude<
		{ id: string; name: string; index: number; type: string },
		FilterField
	>;
	onEdit: () => void;
}

const Draggable = ({ item, onEdit }: Props) => {
	return (
		<DNDDraggable
			key={item.id}
			draggableId={item.id.toString()}
			index={item.index}
		>
			{(provided, snapshot) => (
				<FieldItem
					item={item}
					onEdit={onEdit}
					onEnterToDrop={() => {}}
					props={{
						ref: provided.innerRef,
						...provided.draggableProps,
						...provided.dragHandleProps
					}}
				>
					{(provided as any).placeholder}
				</FieldItem>
			)}
		</DNDDraggable>
	);
};

export default Draggable;
