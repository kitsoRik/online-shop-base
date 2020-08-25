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
			index: number;
			fields: Extract<
				{ id: string; index: number; name: string },
				FilterField
			>[];
		},
		FilterGroup
	>[];

	changeContext: (value: "groups" | "items") => () => void;
}

const MoverContext = ({ groups, changeContext }: Props) => {
	return (
		<>
			{groups
				.slice()
				.sort((a, b) => a.index - b.index)
				.map((group, ind) => (
					<>
						<GroupItem
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
