import React from "react";
import { useLocationField, useLocationFieldT } from "react-location-query";
import { Category } from "../../../../../generated/graphql";
import getCategoryType from "./utils/getCategoryType";
import SubsubCategoryContent from "./SubsubCategoryContent";
import { useTranslation } from "react-i18next";
import SubCategoryContent from "./SubCategoryContent";
import RootCategoryContent from "./RootCategoryContent";

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
	if (categoryType === "sub")
		return (
			<SubCategoryContent
				searchText={search_text}
				subCategoryId={searchSelectedCategory}
				languageCode={i18n.language}
			/>
		);
	if (categoryType === "root")
		return (
			<RootCategoryContent
				searchText={search_text}
				rootCategoryId={searchSelectedCategory}
				languageCode={i18n.language}
			/>
		);

	throw new Error("Reached non-reachable place");
};

export default Content;
