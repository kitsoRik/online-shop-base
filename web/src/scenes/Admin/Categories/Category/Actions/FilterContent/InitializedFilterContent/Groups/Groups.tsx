import React, { useState, useEffect } from "react";
import { useApolloClient } from "@apollo/client";
import {
	FilterWithGroupsFragmentDoc,
	FilterWithGroupsFragment,
	useChangeFilterGroupItemsOrderMutation,
	useChangeFilterGroupItemLocationMutation
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

	async function onDragEnd(result: DropResult) {
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
	}

	const ddGroupsContext = (
		<DragDropContext
			onDragEnd={result => {
				console.log(result);
			}}
		>
			{groups
				.slice()
				.sort((a, b) => a.index - b.index)
				.map((group, ind) => (
					<Droppable key={ind} droppableId={group.id}>
						{(provided, snapshot) => (
							<div
								ref={provided.innerRef}
								style={getListStyle(snapshot.isDraggingOver)}
								{...provided.droppableProps}
							>
								{
									<GroupItem.Draggable
										filterGroup={group}
										{...{
											index: ind,
											getItemStyle,
											getListStyle,
											onEnterToDrop: () => {
												if (!isDragging)
													setDraggable("groups");
											}
										}}
									>
										{group.fields
											.slice()
											.sort((a, b) => a.index - b.index)
											.map((item, index) => (
												<>
													<FieldItem
														{...{
															snapshot,
															provided,
															index,
															item,
															getItemStyle,
															ind,
															onEnterToDrop: () => {
																if (!isDragging)
																	setDraggable(
																		"items"
																	);
															}
														}}
													/>
												</>
											))}
									</GroupItem.Draggable>
								}
							</div>
						)}
					</Droppable>
				))}
		</DragDropContext>
	);

	const [isDragging, setIsDragging] = useState(false);
	const ddItemsContext = (
		<DragDropContext
			onDragEnd={onDragEnd}
			onDragStart={() => setIsDragging(true)}
		>
			{groups
				.slice()
				.sort((a, b) => a.index - b.index)
				.map((group, ind) => (
					<GroupItem.Droppable
						filterGroup={group}
						index={ind}
						{...{
							ind,

							getItemStyle,
							getListStyle,
							onEnterToDrop: () => {
								if (!isDragging) setDraggable("groups");
							}
						}}
					>
						{group.fields
							.slice()
							.sort((a, b) => a.index - b.index)
							.map((item, index) => (
								<FieldItem.Draggable
									{...{
										index,
										item,
										getItemStyle,
										ind
									}}
								/>
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
							{...{
								withDd: false,
								ind,
								getItemStyle,
								getListStyle,
								onEnterToDrop: () => {
									if (!isDragging) setDraggable("groups");
								}
							}}
						>
							{group.fields
								.slice()
								.sort((a, b) => a.index - b.index)
								.map((item, index) => (
									<>
										<FieldItem
											{...{
												withDd: false,
												index,
												item,
												getItemStyle,
												ind,
												onEnterToDrop: () => {
													if (!isDragging)
														setDraggable("items");
												}
											}}
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


const grid = 8;

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: "none",
	padding: grid * 2,
	margin: `0 0 ${grid}px 0`,

	// change background colour if dragging
	background: isDragging ? "lightgreen" : "grey",

	// styles we need to apply on draggables
	...draggableStyle
});
const getListStyle = (isDraggingOver: any) => ({
	background: isDraggingOver ? "lightblue" : "lightgrey",
	padding: grid,
	width: 250
});

export default Groups;
