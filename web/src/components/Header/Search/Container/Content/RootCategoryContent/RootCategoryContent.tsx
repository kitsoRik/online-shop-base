import React from "react";
import AnyCategoryContent from "../AnyCategoryContent";
import { useSearchRootCategoryProductsQuery } from "../../../../../../generated/graphql";

interface Props {
	searchText: string;
	rootCategoryId: number;
	languageCode: string;

	onFilterSearch: (values: object) => void;
}

const RootCategoryContent = ({
	searchText,
	rootCategoryId,
	languageCode,
	...props
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

	return (
		<AnyCategoryContent
			data={data}
			loading={loading}
			options={{}}
			{...props}
		/>
	);
};

export default RootCategoryContent;
