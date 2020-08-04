import React from "react";
import { Typography } from "antd";
import { Category } from "../../../../generated/graphql";
import Page from "../../../../shared/Page";
import Search from "./Search";
import { Link } from "react-router-dom";

const Main = () => {
	let category: Category | null = null;

	return (
		<Page>
			<Typography.Title>Search product to edit</Typography.Title>
			<Search onCategoryChange={c => (category = c)} />
			<Typography.Link>
				<Link to="/admin/products/create">
					or click create new category
				</Link>
			</Typography.Link>
		</Page>
	);
};

export default Main;
