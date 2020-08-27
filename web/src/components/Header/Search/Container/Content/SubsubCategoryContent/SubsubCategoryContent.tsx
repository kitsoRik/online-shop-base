import React from "react";
import AnyCategoryContent from "../AnyCategoryContent";
import { useSearchSubsubCategoryProductsQuery } from "../../../../../../generated/graphql";

interface Props {
	searchText: string;
	categoryId: number;
	languageCode: string;
}

const SubsubCategoryContent = ({
	searchText,
	categoryId,
	languageCode
}: Props) => {
	const { data, loading } = useSearchSubsubCategoryProductsQuery({
		variables: {
			categoryId,
			nameTemplate: searchText,
			languageCode,
			limit: 10,
			offset: 0
		}
	});

	return <AnyCategoryContent data={data} loading={loading} />;
};

export default SubsubCategoryContent;
