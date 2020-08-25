import React, { useState, useEffect } from "react";
import { useApolloClient } from "@apollo/client";
import {
	FilterWithGroupsFragmentDoc,
	FilterWithGroupsFragment,
	useChangeFilterGroupItemsOrderMutation,
	useChangeFilterGroupItemLocationMutation,
	useChangeFilterGroupsOrderMutation
} from "../../../../../../../../generated/graphql";
import {
	DragDropContext,
	Droppable,
	Draggable,
	DropResult
} from "react-beautiful-dnd";
import GroupItem from "./GroupItem";
import FieldItem from "./FieldItem";

interface Props {
	filterId: number;

	onAddNewGroup: () => void;
}

const Groups = ({ filterId, onAddNewGroup }: Props) => {
	const [draggable, setDraggable] = useState<"groups" | "items" | null>(null);

	const client = useApolloClient();
	const filter: FilterWithGroupsFragment = client.readFragment({
		fragment: FilterWithGroupsFragmentDoc,
		id: `Filter:${filterId}`
	})!;
	const groups = filter.groups.slice().sort((a, b) => a.index - b.index);

	const [
		changeFilterGroupItemsOrder
	] = useChangeFilterGroupItemsOrderMutation();
	const [
		changeFilterGroupItemLocation
	] = useChangeFilterGroupItemLocationMutation();

	const [changeFilterGroupsOrder] = useChangeFilterGroupsOrderMutation();

	const onDragItemEnd = async (result: DropResult) => {
		setDraggable(null);
		setIsDragging(false);
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
			client.writeFragment({
				fragment: FilterWithGroupsFragmentDoc,
				id: `Filter:${filterId}`,
				data: {
					...filter,
					groups: [
						...groups.filter(g => g.id !== group.id),
						{
							...group,
							fields: orderedItemsIds.map((orderedId, index) => ({
								...items.find(i => i.id === orderedId)!,
								index
							}))
						}
					]
				}
			});
			const {} = await changeFilterGroupItemsOrder({
				variables: {
					filterGroupId: group.id,
					orderedItemsIds
				}
				// optimisticResponse: { // updating in cache, but re-render with stale data
				// 	changeFilterGroup: {
				// 		...filter,
				// 		groups: [
				// 			{
				// 				...group,
				// 				fields: orderedItemsIds.map(
				// 					(orderedId, index) => ({
				// 						...items.find(i => i.id === orderedId)!,
				// 						index
				// 					})
				// 				)
				// 			}
				// 		]
				// 	}
				// }
			});
		} else {
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

	const onDragGroupEnd = async (result: DropResult) => {
		setDraggable(null);
		setIsDragging(false);
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
		client.writeFragment({
			fragment: FilterWithGroupsFragmentDoc,
			id: `Filter:${filterId}`,
			data: {
				...filter,
				groups: groups.map(group => ({
					...group,
					index: orderedGroupsIds.findIndex(id => id === group.id)
				}))
			}
		});
		const {} = await changeFilterGroupsOrder({
			variables: {
				orderedGroupsIds
			}
		});
	};

	const ddGroupsContext = (
		<DragDropContext
			onDragEnd={onDragGroupEnd}
			onDragStart={() => setIsDragging(true)}
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
													onEnterToDrop={changeDraggable(
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
	const [isDragging, setIsDragging] = useState(false);

	const changeDraggable = (newDraggable: "items" | "groups" | null) => () => {
		if (isDragging) return;
		if (draggable === newDraggable) return;
		console.log("C", newDraggable);
		setDraggable(newDraggable);
	};

	const ddItemsContext = (
		<DragDropContext
			onDragEnd={onDragItemEnd}
			onDragStart={() => setIsDragging(true)}
		>
			{groups
				.slice()
				.sort((a, b) => a.index - b.index)
				.map((group, ind) => (
					<GroupItem.Droppable
						filterGroup={group}
						onEnterToDrop={changeDraggable("groups")}
					>
						{group.fields
							.slice()
							.sort((a, b) => a.index - b.index)
							.map(item => (
								<FieldItem.Draggable item={item} />
							))}
					</GroupItem.Droppable>
				))}
		</DragDropContext>
	);

	const context = (
		<>
			{groups
				.slice()
				.sort((a, b) => a.index - b.index)
				.map((group, ind) => (
					<>
						<GroupItem
							filterGroup={group}
							onEnterToDrop={changeDraggable("groups")}
						>
							{group.fields
								.slice()
								.sort((a, b) => a.index - b.index)
								.map((item, index) => (
									<>
										<FieldItem
											item={item}
											onEnterToDrop={changeDraggable(
												"items"
											)}
										/>
									</>
								))}
						</GroupItem>
					</>
				))}
		</>
	);

	return (
		<>
			<div>
				<button type="button" onClick={onAddNewGroup}>
					Add new group
				</button>

				<div style={{ display: "flex", flexDirection: "column" }}>
					{draggable === "groups" && ddGroupsContext}
					{draggable === "items" && ddItemsContext}
					{draggable === null && context}
				</div>
			</div>
		</>
	);
};

export default Groups;
