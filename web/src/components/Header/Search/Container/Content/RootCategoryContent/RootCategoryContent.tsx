import React from "react";
import AnyCategoryContent from "../AnyCategoryContent";
import { useSearchRootCategoryProductsQuery } from "../../../../../../generated/graphql";

interface Props {
	searchText: string;
	rootCategoryId: number;
	languageCode: string;
}

const RootCategoryContent = ({
	searchText,
	rootCategoryId,
	languageCode
}: Props) => {
	const { data, loading } = useSearchRootCategoryProductsQuery({
		variables: {
			rootCategoryId,
			nameTemplate: searchText,
			languageCode,
			limit: 10,
			offset: 0
		}
	});

	return <AnyCategoryContent data={data} loading={loading} />;
};

export default RootCategoryContent;
