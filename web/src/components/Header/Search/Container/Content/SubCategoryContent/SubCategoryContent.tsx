import React from "react";
import AnyCategoryContent from "../AnyCategoryContent";
import { useSearchSubCategoryProductsQuery } from "../../../../../../generated/graphql";

interface Props {
	searchText: string;
	subCategoryId: number;
	languageCode: string;

	onFilterSearch: (values: object) => void;
}

const SubCategoryContent = ({
	searchText,
	subCategoryId,
	languageCode,
	...props
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

	return (
		<AnyCategoryContent
			data={data}
			loading={loading}
			options={{}}
			{...props}
		/>
	);
};

export default SubCategoryContent;
