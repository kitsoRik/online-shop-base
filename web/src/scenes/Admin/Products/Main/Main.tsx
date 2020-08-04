import React from "react";
import { Typography } from "antd";
import Page from "../../../../shared/Page";
import Search from "./Search";
import { Link } from "react-router-dom";

const Main = () => {
	let product: { id: number; name: string } | null = null;

	return (
		<Page>
			<Typography.Title>Search product to edit</Typography.Title>
			<Search onProductChange={p => (product = p)} />
			<Typography.Link>
				<Link to="/admin/products/create">
					or click create new category
				</Link>
			</Typography.Link>
		</Page>
	);
};

export default Main;
