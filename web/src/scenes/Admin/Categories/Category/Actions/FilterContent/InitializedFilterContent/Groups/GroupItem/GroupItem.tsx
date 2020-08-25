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
					<Button onClick={onAddField}>Add new field</Button>
					{children}
				</Collapse.Panel>
			</Collapse>
		</div>
	);
};

GroupItem.Droppable = Droppable;
GroupItem.Draggable = Draggable;

export default GroupItem;
