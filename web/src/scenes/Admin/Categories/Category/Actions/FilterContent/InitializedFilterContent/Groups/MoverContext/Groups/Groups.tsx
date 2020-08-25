import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import {
	FilterField,
	FilterGroup,
	FilterWithGroupsFragmentDoc,
	Filter,
	useChangeFilterGroupsOrderMutation,
	FilterGroupIndexFragmentDoc
} from "../../../../../../../../../../generated/graphql";
import FieldItem from "../../FieldItem";
import GroupItem from "../../GroupItem";
import { useApolloClient } from "@apollo/client";
interface Props {
	groups: Exclude<
		{
			id: string;
			index: number;
			name: string;
			fields: Extract<
				{ id: string; index: number; name: string },
				FilterField
			>[];
		},
		FilterGroup
	>[];

	changeContext: (value: "items" | null) => () => void;
	changeDragging: (value: boolean) => void;
}
const Groups = ({ groups, changeContext, changeDragging }: Props) => {
	const client = useApolloClient();
	const [changeFilterGroupsOrder] = useChangeFilterGroupsOrderMutation();

	const onDragGroupEnd = async (result: DropResult) => {
		changeContext(null);
		changeDragging(false);
		const { source, destination } = result;
		if (!destination) {
			return;
		}

		if (source.index === destination.index) return;

		const groupsIds = groups.map(g => g.id);
		let orderedGroupsIds = [...groupsIds];
		orderedGroupsIds = [
			...orderedGroupsIds.slice(0, source.index),
			...orderedGroupsIds.slice(source.index + 1)
		];
		orderedGroupsIds = [
			...orderedGroupsIds.slice(0, destination.index),
			groupsIds[source.index],
			...orderedGroupsIds.slice(destination.index)
		];

		groups.forEach(group => {
			client.writeFragment({
				fragment: FilterGroupIndexFragmentDoc,
				id: `FilterGroup:${group.id}`,
				data: {
					...group,
					index: orderedGroupsIds.findIndex(id => id === group.id)
				}
			});
		});

		const {} = await changeFilterGroupsOrder({
			variables: {
				orderedGroupsIds
			}
		});
	};

	return (
		<DragDropContext
			onDragEnd={onDragGroupEnd}
			onDragStart={() => changeDragging(true)}
		>
			<Droppable droppableId={"d"}>
				{(provided, snapshot) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						{groups
							.slice()
							.sort((a, b) => a.index - b.index)
							.map((group, ind) => (
								<GroupItem.Draggable filterGroup={group}>
									{group.fields
										.slice()
										.sort((a, b) => a.index - b.index)
										.map((item, index) => (
											<>
												<FieldItem
													item={item}
													onEnterToDrop={changeContext(
														"items"
													)}
												/>
											</>
										))}
								</GroupItem.Draggable>
							))}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default Groups;
