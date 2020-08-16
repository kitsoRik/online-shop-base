import React from "react";
import Page from "../../../../shared/Page";
import Form from "./Form";
import { useCreateCategoryMutation } from "../../../../generated/graphql";

const Create = () => {
	const [createCategory] = useCreateCategoryMutation();

	const onCreate = async (
		name: string,
		description: string,
		level: number,
		parentId?: number
	) => {

		const { data } = await createCategory({
			variables: { name, level, parentId }
        });
        
	};

	return (
		<Page>
			<Form onCreate={onCreate} />
		</Page>
	);
};

export default Create;
