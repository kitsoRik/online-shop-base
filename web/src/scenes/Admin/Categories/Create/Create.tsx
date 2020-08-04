import React from "react";
import Page from "../../../../shared/Page";
import Form from "./Form";
import { useCreateCategoryMutation } from "../../../../generated/graphql";

const Create = () => {
	const [createCategory] = useCreateCategoryMutation();

	const onCreate = async (
		name: string,
		description: string,
		parentId?: number
	) => {
		console.log("Create ", name, description, parentId);

		const { data } = await createCategory({
			variables: { name, parentId }
        });
        
		console.log(data);
	};

	return (
		<Page>
			<Form onCreate={onCreate} />
		</Page>
	);
};

export default Create;
