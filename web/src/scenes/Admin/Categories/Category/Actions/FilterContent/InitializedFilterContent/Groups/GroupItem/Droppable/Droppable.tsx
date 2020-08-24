import React from "react";
import { Button } from "antd";
import {
	useAddFieldToFilterGroupMutation,
	GetCategoryFilterDocument
} from "../../../../../../../../../../generated/graphql";
import { getOperationName } from "@apollo/client/utilities";

interface Props {
	filterGroup: { id: string };
	provided?: any;
	getListStyle: any;
	snapshot?: any;

	children: any;
	onEnterToDrop: () => void;
}

const Droppable = ({
	snapshot,
	provided,
	getListStyle,
	filterGroup,
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
		<div
			ref={provided.innerRef}
			style={getListStyle(snapshot.isDraggingOver)}
			{...provided.droppableProps}
			onMouseMoveCapture={e => {
				if (e.target === e.currentTarget) {
					onEnterToDrop();
				}
			}}
		>
			<div>
				<Button onClick={onAddField}>Add new field</Button>
			</div>
			{children}
			{provided.placeholder}
		</div>
	);
};

export default Droppable;
