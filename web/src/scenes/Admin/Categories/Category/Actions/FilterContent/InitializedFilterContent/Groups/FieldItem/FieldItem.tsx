import React from "react";
import { FilterField } from "../../../../../../../../../generated/graphql";
import Draggable from "./Draggable";
import { Alert, Typography, Button } from "antd";
import TypeContent from "./TypeContent";

interface Props {
	item: Exclude<{ id: string; name: string; type: string }, FilterField>;

	props?: any;
	children?: any;

	onEnterToDrop: () => void;
	onEdit: () => void;
}

const FieldItem = ({
	item,
	onEnterToDrop,
	onEdit,
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
			<div>
				<Alert
					type="info"
					message={
						<div>
							<Typography.Text>{item.name}</Typography.Text>
							<TypeContent item={item} />
							<Button onClick={onEdit}>Edit</Button>
						</div>
					}
				/>
				{children}
			</div>
		</div>
	);
};

FieldItem.Draggable = Draggable;

export default FieldItem;