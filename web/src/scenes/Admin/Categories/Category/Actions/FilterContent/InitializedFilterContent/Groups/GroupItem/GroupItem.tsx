import React from "react";
import {
	useAddFieldToFilterGroupMutation,
	GetCategoryFilterDocument
} from "../../../../../../../../../generated/graphql";
import { Button, Collapse } from "antd";
import { getOperationName } from "@apollo/client/utilities";
import Droppable from "./Droppable";
import Draggable from "./Draggable";
import Header from "./Header";

interface Props {
	filterGroup: { id: string; name: string };
	props?: any;
	onEnterToDrop: () => void;

	children?: any;
}

const GroupItem = ({
	filterGroup,
	children = null,
	onEnterToDrop,
	props = {}
}: Props) => {
	

	return (
		<div
			onMouseEnter={e => {
				onEnterToDrop();
			}}
			{...props}
		>
			<Collapse activeKey={filterGroup.id}>
				<Collapse.Panel
					header={<Header filterGroup={filterGroup} />}
					key={filterGroup.id}
				>
					{children}
				</Collapse.Panel>
			</Collapse>
		</div>
	);
};

GroupItem.Droppable = Droppable;
GroupItem.Draggable = Draggable;

export default GroupItem;
