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
	filterGroup: { id: string; index: number; name: string };

	children: any;
	onEnterToDrop: () => void;

	onEdit: () => void;
}

const Droppable = ({ filterGroup, children, onEnterToDrop, onEdit }: Props) => {
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
		<DNDDropable key={filterGroup.index} droppableId={filterGroup.id}>
			{(provided, snapshot) => (
				<GroupItem
					filterGroup={filterGroup}
					onEnterToDrop={onEnterToDrop}
					onEdit={onEdit}
					props={{
						ref: provided.innerRef,
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
