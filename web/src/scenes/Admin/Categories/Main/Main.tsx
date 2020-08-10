import React from "react";
import { Typography } from "antd";
import { Category } from "../../../../generated/graphql";
import Page from "../../../../shared/Page";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Main = () => {
	const { t } = useTranslation();
	let category: Category | null = null;

	return (
		<Page>
			<Typography.Title>
				{t("admin.categories.main.title")}
			</Typography.Title>
			<Search onCategoryChange={c => (category = c)} />
			<Typography.Link>
				<Link to="/admin/categories/create">
					{t("admin.categories.main.link")}
				</Link>
			</Typography.Link>
		</Page>
	);
};

export default Main;
