import React from "react";
import Items from "./Items";
import Groups from "./Groups";
import {
	FilterGroup,
	FilterField
} from "../../../../../../../../../generated/graphql";
import GroupItem from "../GroupItem";
import FieldItem from "../FieldItem";

interface Props {
	groups: Exclude<
		{
			id: string;
			name: string;
			index: number;
			fields: Exclude<
				{ id: string; index: number; name: string; type: string },
				FilterField
			>[];
		},
		FilterGroup
	>[];

	changeContext: (value: "groups" | "items") => () => void;

	onAddField: (filterGroupId: string) => void;

	onEditGroup: (groupId: string) => void;
	onEditItem: (groupId: string, itemId: string) => void;
}

const MoverContext = ({
	groups,
	changeContext,
	onAddField,
	onEditGroup,
	onEditItem
}: Props) => {
	return (
		<>
			{groups
				.slice()
				.sort((a, b) => a.index - b.index)
				.map((group, ind) => (
					<>
						<GroupItem
							onAddField={onAddField}
							onEdit={() => onEditGroup(group.id)}
							filterGroup={group}
							onEnterToDrop={changeContext("groups")}
						>
							{group.fields
								.slice()
								.sort((a, b) => a.index - b.index)
								.map((item, index) => (
									<>
										<FieldItem
											item={item}
											onEdit={() =>
												onEditItem(group.id, item.id)
											}
											onEnterToDrop={changeContext(
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
};

MoverContext.Items = Items;
MoverContext.Groups = Groups;

export default MoverContext;
