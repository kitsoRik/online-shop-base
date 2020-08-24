import React from "react";
import { Button } from "antd";
import {
	useAddFieldToFilterGroupMutation,
	GetCategoryFilterDocument
} from "../../../../../../../../../../generated/graphql";
import { getOperationName } from "@apollo/client/utilities";
import { Droppable as DNDDropable } from "react-beautiful-dnd";
import GroupItem from "../GroupItem";

interface Props {
	filterGroup: { id: string };
	index: number;
	getListStyle: any;

	children: any;
	onEnterToDrop: () => void;
}

const Droppable = ({
	getListStyle,
	filterGroup,
	index,
	children,
	onEnterToDrop
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
		<DNDDropable key={index} droppableId={filterGroup.id}>
			{(provided, snapshot) => (
				<GroupItem
					filterGroup={filterGroup}
					getListStyle={getListStyle}
					onEnterToDrop={onEnterToDrop}
					props={{
						ref: provided.innerRef,
						style: getListStyle(snapshot.isDraggingOver),
						...provided.droppableProps
					}}
				>
					{children}
					{provided.placeholder}
				</GroupItem>
			)}
		</DNDDropable>
	);
};

export default Droppable;
