import React from "react";
import { FilterField } from "../../../../../../../../../generated/graphql";
import Draggable from "./Draggable";

interface Props {
	item: Exclude<{ id: string; name: string }, FilterField>;

	props?: any;
	children?: any;

	onEnterToDrop: () => void;
}

const FieldItem = ({
	item,
	onEnterToDrop,
	children = null,
	props = {}
}: Props) => {
	return (
		<div
			onMouseEnter={e => {
				e.stopPropagation();
				onEnterToDrop();
			}}
			{...props}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around"
				}}
			>
				{item.name}
				{children}
			</div>
		</div>
	);
};

FieldItem.Draggable = Draggable;

export default FieldItem;
