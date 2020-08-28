import React, { useState } from "react";
import { useGetCategoryFilterQuery } from "../../../../../../../generated/graphql";
import { useParams } from "react-router";
import Groups from "./Groups";
import AddNewGroupDialog from "./AddNewGroupDialog";
import EditGroupDialog from "./EditGroupDialog";
import EditItemDialog from "./EditItemDialog/EditItemDialog";
import AddNewItemDialog from "./AddNewItemDialog";

const InitializedFilterContent = () => {
	const categoryId = +(useParams() as any).id;
	const { data, loading } = useGetCategoryFilterQuery({
		variables: {
			categoryId: +(useParams() as any).id
		}
	});

	const filter = data!.categories![0].filter!;

	const [addGroupVisible, setAddGroupVisible] = useState(false);
	const [addItemVisible, setAddItemVisible] = useState("");
	const [editVisibleGroup, setEditVisibleGroup] = useState("");
	const [editVisibleItem, setEditVisibleItem] = useState<[string, string]>([
		"",
		""
	]); // groupId, fieldId

	return (
		<>
			<Groups
				filterId={filter.id}
				onAddNewGroup={() => setAddGroupVisible(true)}
				onAddField={setAddItemVisible}
				onEditGroup={groupId => setEditVisibleGroup(groupId)}
				onEditItem={(groupId, fieldId) =>
					setEditVisibleItem([groupId, fieldId])
				}
			/>
			<AddNewGroupDialog
				visible={addGroupVisible}
				onClose={() => setAddGroupVisible(false)}
				filterId={filter.id}
			/>
			<AddNewItemDialog
				categoryId={categoryId}
				visible={addItemVisible !== ""}
				filterGroupId={addItemVisible}
				onClose={() => setAddItemVisible("")}
			/>
			<EditGroupDialog
				groupId={editVisibleGroup}
				visible={editVisibleGroup !== ""}
				onClose={() => setEditVisibleGroup("")}
			/>
			<EditItemDialog
				visible={!!editVisibleItem[0]}
				itemId={editVisibleItem[1]}
				groupId={editVisibleItem[0]}
				onClose={() => setEditVisibleItem(["", ""])}
			/>
		</>
	);
};

export default InitializedFilterContent;
