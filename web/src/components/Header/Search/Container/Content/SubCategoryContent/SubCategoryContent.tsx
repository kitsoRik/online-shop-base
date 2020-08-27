import React from "react";
import AnyCategoryContent from "../AnyCategoryContent";
import { useSearchSubCategoryProductsQuery } from "../../../../../../generated/graphql";

interface Props {
	searchText: string;
	subCategoryId: number;
	languageCode: string;
}

const SubCategoryContent = ({
	searchText,
	subCategoryId,
	languageCode
}: Props) => {
	const { data, loading } = useSearchSubCategoryProductsQuery({
		variables: {
			subCategoryId,
			nameTemplate: searchText,
			languageCode,
			limit: 10,
			offset: 0
		}
	});

	return <AnyCategoryContent data={data} loading={loading} />;
};

export default SubCategoryContent;
