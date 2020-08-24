import React from "react";
import { FilterField } from "../../../../../../../../../generated/graphql";
import Draggable from "./Draggable";

interface Props {
	ind: any;
	getItemStyle: any;
	item: Exclude<{ id: string; name: string }, FilterField>;
	index: any;

	onEnterToDrop: () => void;
}

const FieldItem = ({ item, getItemStyle, onEnterToDrop }: Props) => {
	return (
		<div
			style={getItemStyle(false, false)}
			onMouseMoveCapture={() => {
				onEnterToDrop();
			}}
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

FieldItem.Draggable = Draggable;

export default FieldItem;
