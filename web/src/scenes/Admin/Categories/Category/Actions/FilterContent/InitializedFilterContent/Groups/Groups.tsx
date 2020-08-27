import React, { useState, useEffect } from "react";
import { useApolloClient } from "@apollo/client";
import {
	FilterWithGroupsFragmentDoc,
	FilterWithGroupsFragment
} from "../../../../../../../../generated/graphql";

import MoverContext from "./MoverContext";

interface Props {
	filterId: number;

	onAddNewGroup: () => void;
	onEditGroup: (groupId: string) => void;
}

const Groups = ({ filterId, onAddNewGroup, onEditGroup }: Props) => {
	const [context, setContent] = useState<"groups" | "items" | null>(null);

	const client = useApolloClient();
	const filter: FilterWithGroupsFragment = client.readFragment({
		fragment: FilterWithGroupsFragmentDoc,
		id: `Filter:${filterId}`
	})!;
	const groups = filter.groups.slice().sort((a, b) => a.index - b.index);

	const [isDragging, setIsDragging] = useState(false);

	const changeContext = (newContext: "items" | "groups" | null) => () => {
		if (isDragging) return;
		if (context === newContext) return;
		setContent(newContext);
	};

	return (
		<>
			<div>
				<button type="button" onClick={onAddNewGroup}>
					Add new group
				</button>

				<div style={{ display: "flex", flexDirection: "column" }}>
					{context === "groups" && (
						<MoverContext.Groups
						onEditGroup={onEditGroup}
							changeContext={changeContext}
							changeDragging={setIsDragging}
							groups={groups}
						/>
					)}
					{context === "items" && (
						<MoverContext.Items
						onEditGroup={onEditGroup}
							changeContext={changeContext}
							changeDragging={setIsDragging}
							groups={groups}
						/>
					)}
					{context === null && (
						<MoverContext
						onEditGroup={onEditGroup}
							groups={groups}
							changeContext={changeContext}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Groups;
