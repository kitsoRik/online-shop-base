import React, { useState } from "react";
import { useGetCategoryFilterQuery } from "../../../../../../../generated/graphql";
import { useParams } from "react-router";
import Groups from "./Groups";
import AddNewGroupDialog from "./AddNewGroupDialog";

const InitializedFilterContent = () => {
	const { data, loading } = useGetCategoryFilterQuery({
		variables: {
			categoryId: +(useParams() as any).id
		}
	});

	const filter = data!.categories![0].filter!;

	const [addVisible, setAddVisible] = useState(false);

	return (
		<>
			<Groups
				filterId={filter.id}
				onAddNewGroup={() => setAddVisible(true)}
			/>
			<AddNewGroupDialog
				visible={addVisible}
				onClose={() => setAddVisible(false)}
				filterId={filter.id}
			/>
		</>
	);
};

export default InitializedFilterContent;
