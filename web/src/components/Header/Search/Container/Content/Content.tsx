import React from "react";
import { useLocationField, useLocationFieldT } from "react-location-query";
import { Category } from "../../../../../generated/graphql";
import getCategoryType from "./utils/getCategoryType";
import SubsubCategoryContent from "./SubsubCategoryContent";
import { useTranslation } from "react-i18next";

interface Props {
	categories: Exclude<
		{
			id: number;
			name: string;
			parent?: {
				id: number;
				name: string;
				parent?: {
					id: number;
					name: string;
				} | null;
			} | null;
		},
		Category
	>[];
}

const Content = ({ categories }: Props) => {
	const { i18n } = useTranslation();

	const [searchSelectedCategory] = useLocationFieldT<number>(
		"search_selected_category"
	);

	const [search_text] = useLocationFieldT<string>("search_text");
	const categoryType = getCategoryType(searchSelectedCategory, categories);

	if (categoryType === "subsub")
		return (
			<SubsubCategoryContent
				searchText={search_text}
				categoryId={searchSelectedCategory}
				languageCode={i18n.language}
			/>
		);

	return <>Content {categoryType}</>;
};

export default Content;
