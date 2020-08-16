import React from "react";
import {
	useGetCategoriesQuery,
	Category
} from "../../../../../../generated/graphql";
import { Tree } from "antd";
import { DataNode } from "antd/lib/tree";
import { Link } from "react-location-query";

const CategoriesTree = () => {
	const { data } = useGetCategoriesQuery();

	const categories = data?.categories ?? [];
	const treeData = loopCategories(categories);

	return (
		<>
			<Tree
				className="draggable-tree"
				defaultExpandAll={true}
				titleRender={({ key, title }) => (
					<Link to={`/admin/categories/${key}`} query={{}}>
						{title}
					</Link>
				)}
				treeData={treeData}
			/>
		</>
	);
};

type InputLoopCategory = {
	id: number;
	name: string;
	children?: InputLoopCategory[] | null;
};

function loopCategories(categories: InputLoopCategory[]): DataNode[] {
	console.log(categories);
	return categories.map(root => ({
		key: root.id,
		title: root.name,
		children: loopCategories(root.children ?? [])
	}));
}

export default CategoriesTree;
