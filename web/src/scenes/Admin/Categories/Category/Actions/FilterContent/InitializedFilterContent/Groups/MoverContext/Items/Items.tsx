import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import {
	FilterGroup,
	FilterField,
	useChangeFilterGroupItemsOrderMutation,
	useChangeFilterGroupItemLocationMutation,
	FilterWithGroupsFragmentDoc,
	Filter,
	FilterGroupFieldsIndexFragmentDoc,
	FilterFieldIndexFragmentDoc
} from "../../../../../../../../../../generated/graphql";
import GroupItem from "../../GroupItem";
import FieldItem from "../../FieldItem";
import { useApolloClient } from "@apollo/client";

interface Props {
	groups: Exclude<
		{
			id: string;
			index: number;
			name: string;
			fields: Exclude<
				{ id: string; index: number; name: string; type: string },
				FilterField
			>[];
		},
		FilterGroup
	>[];

	changeContext: (value: "groups" | null) => () => void;
	changeDragging: (value: boolean) => void;

	onAddField: (filterGroupId: string) => void;

	onEditGroup: (groupId: string) => void;
	onEditItem: (groupId: string, itemId: string) => void;
}

const Items = ({
	groups,
	changeContext,
	changeDragging,
	onAddField,
	onEditGroup,
	onEditItem
}: Props) => {
	const client = useApolloClient();
	const [
		changeFilterGroupItemsOrder
	] = useChangeFilterGroupItemsOrderMutation();
	const [
		changeFilterGroupItemLocation
	] = useChangeFilterGroupItemLocationMutation();

	const onDragItemEnd = async (result: DropResult) => {
		changeContext(null);
		changeDragging(false);

		const { source, destination } = result;

		if (!destination) {
			return;
		}

		const group = groups.find(g => g.id === source.droppableId)!;
		if (source.droppableId === destination.droppableId) {
			if (source.index === destination.index) return;

			const items = group.fields
				.slice()
				.sort((a, b) => a.index - b.index);
			const itemIds = items.map(f => f.id);
			let orderedItemsIds = [...itemIds];
			orderedItemsIds = [
				...orderedItemsIds.slice(0, source.index),
				...orderedItemsIds.slice(source.index + 1)
			];
			orderedItemsIds = [
				...orderedItemsIds.slice(0, destination.index),
				itemIds[source.index],
				...orderedItemsIds.slice(destination.index)
			];

			orderedItemsIds.forEach((orderedId, index) => {
				client.writeFragment({
					fragment: FilterFieldIndexFragmentDoc,
					id: `FilterField:${orderedId}`,
					data: {
						...items.find(i => i.id === orderedId)!,
						index
					}
				});
			});

			const {} = await changeFilterGroupItemsOrder({
				variables: {
					filterGroupId: group.id,
					orderedItemsIds
				}
			});
		} else {
			const sourceGroup = { ...group };

			const destinationGroup = groups.find(
				g => g.id === destination.droppableId
			)!;

			const movableItem = sourceGroup.fields.find(
				f => f.index === source.index
			)!;
			const newGroups = [
				...groups.filter(
					g => g.id !== sourceGroup.id && g.id !== destinationGroup.id
				),
				{
					...sourceGroup,
					fields: sourceGroup.fields
						.filter(f => f.index !== source.index)
						.map(f => ({
							...f,
							index:
								f.index >= source.index ? f.index - 1 : f.index
						}))
				},
				{
					...destinationGroup,
					fields: [
						...destinationGroup.fields.map(f => ({
							...f,
							index:
								f.index >= destination.index
									? f.index + 1
									: f.index
						})),
						{ ...movableItem, index: destination.index }
					]
				}
			];

			newGroups.forEach(group => {
				client.writeFragment({
					fragment: FilterGroupFieldsIndexFragmentDoc,
					id: `FilterGroup:${group.id}`,
					data: {
						id: group.id,
						fields: group.fields
					}
				});
			});

			await changeFilterGroupItemLocation({
				variables: {
					filterGroupId: group.id,
					deleteIndex: source.index,
					newGroupId: destination.droppableId,
					newGroupIndex: destination.index
				}
			});
		}
	};

	return (
		<DragDropContext
			onDragEnd={onDragItemEnd}
			onDragStart={() => changeDragging(true)}
		>
			{groups
				.slice()
				.sort((a, b) => a.index - b.index)
				.map((group, ind) => (
					<GroupItem.Droppable
						filterGroup={group}
						onEnterToDrop={changeContext("groups")}
						onEdit={() => onEditGroup(group.id)}
						onAddField={onAddField}
					>
						{group.fields
							.slice()
							.sort((a, b) => a.index - b.index)
							.map(item => (
								<FieldItem.Draggable
									item={item}
									onEdit={() => onEditItem(group.id, item.id)}
								/>
							))}
					</GroupItem.Droppable>
				))}
		</DragDropContext>
	);
};

export default Items;
