import React from "react";
import { FilterField } from "../../../../../../../../../generated/graphql";

interface Props {
	ind: any;
	provided: any;
	getItemStyle: any;
	snapshot: any;
	item: Exclude<{ id: string; name: string }, FilterField>;
	index: any;
}

const FieldItem = ({
	ind,
	item,
	getItemStyle,
	snapshot,
	provided,
	index
}: Props) => {
	return (
		<div
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			style={getItemStyle(
				snapshot.isDragging,
				provided.draggableProps.style
			)}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around"
				}}
			>
				{item.name}
			</div>
		</div>
	);
};

export default FieldItem;
