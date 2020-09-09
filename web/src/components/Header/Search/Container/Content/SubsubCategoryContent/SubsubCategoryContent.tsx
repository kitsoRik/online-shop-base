import React from "react";
import AnyCategoryContent from "../AnyCategoryContent";
import { useSearchSubsubCategoryProductsQuery } from "../../../../../../generated/graphql";

interface Props {
	searchText: string;
	categoryId: number;
	languageCode: string;

	onFilterSearch: (values: object) => void;
	options: object;
}

const SubsubCategoryContent = ({
	searchText,
	categoryId,
	languageCode,
	options,
	...props
}: Props) => {
	const { data, loading } = useSearchSubsubCategoryProductsQuery({
		variables: {
			categoryId,
			nameTemplate: searchText,
			languageCode,
			limit: 10,
			offset: 0,
			options
		}
	});

	return (
		<AnyCategoryContent
			data={data}
			loading={loading}
			options={options}
			{...props}
		/>
	);
};

export default SubsubCategoryContent;
