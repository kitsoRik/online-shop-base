import React from "react";
import { FilterField } from "../../../../../../../../../../generated/graphql";
import { Draggable as DNDDraggable } from "react-beautiful-dnd";
import FieldItem from "../FieldItem";

interface Props {
	ind: any;
	getItemStyle: any;
	item: Exclude<{ id: string; name: string }, FilterField>;
	index: any;
}

const Draggable = ({ ind, item, getItemStyle, index }: Props) => {
	return (
		<DNDDraggable
			key={item.id}
			draggableId={item.id.toString()}
			index={index}
		>
			{(provided, snapshot) => (
				<FieldItem
					getItemStyle={getItemStyle}
					ind={ind}
					index={index}
					item={item}
					onEnterToDrop={() => {}}
					props={{
						ref: provided.innerRef,
						...provided.draggableProps,
						...provided.dragHandleProps,
						style: getItemStyle(
							snapshot.isDragging,
							provided.draggableProps.style
						)
					}}
				>
					{(provided as any).placeholder}
				</FieldItem>
			)}
		</DNDDraggable>
	);
};

export default Draggable;
