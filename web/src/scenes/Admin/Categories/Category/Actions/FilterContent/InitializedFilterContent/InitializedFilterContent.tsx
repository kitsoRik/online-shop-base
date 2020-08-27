import React, { useState } from "react";
import { useGetCategoryFilterQuery } from "../../../../../../../generated/graphql";
import { useParams } from "react-router";
import Groups from "./Groups";
import AddNewGroupDialog from "./AddNewGroupDialog";
import EditGroupDialog from "./EditGroupDialog";

const InitializedFilterContent = () => {
	const { data, loading } = useGetCategoryFilterQuery({
		variables: {
			categoryId: +(useParams() as any).id
		}
	});

	const filter = data!.categories![0].filter!;

	const [addVisible, setAddVisible] = useState(false);
	const [editVisibleGroup, setEditVisibleGroup] = useState("");

	return (
		<>
			<Groups
				filterId={filter.id}
				onAddNewGroup={() => setAddVisible(true)}
				onEditGroup={groupId => setEditVisibleGroup(groupId)}
			/>
			<AddNewGroupDialog
				visible={addVisible}
				onClose={() => setAddVisible(false)}
				filterId={filter.id}
			/>
			<EditGroupDialog
				groupId={editVisibleGroup}
				visible={editVisibleGroup !== ""}
				onClose={() => setEditVisibleGroup("")}
			/>
		</>
	);
};

export default InitializedFilterContent;
