import React from "react";
import { useGetCategoryFilterQuery } from "../../../../../../../generated/graphql";
import { useParams } from "react-router";

const InitializedFilterContent = () => {
	const { data, loading } = useGetCategoryFilterQuery({
		variables: {
			categoryId: +(useParams() as any).id
		}
	});

	const filter = data!.categories![0].filter!;

	return <>Inited</>;
};

export default InitializedFilterContent;
