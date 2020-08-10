import React from "react";
import { Tabs } from "antd";
import { useLocationField } from "react-location-query";
import InfoAction from "./InfoAction";
import { Link } from "react-location-query";
import { useFindCategoryByIdQuery } from "../../../../../generated/graphql";
import Category from "./Category";

const Actions = () => {
	const [productId] = useLocationField("product");
	const [tab, setTab] = useLocationField("tab", {
		type: "string",
		initial: "info",
		enum: ["info", "category"]
	});

	const { data, loading } = useFindCategoryByIdQuery({
		skip: productId === -1,
		variables: { id: productId }
	});

	const category = data?.findCategoryById;

	return (
		<Tabs
			activeKey={tab}
			tabPosition={"left"}
			onTabClick={tab => {
				// if (tab === "category") {
				// 	return queryPush("/admin/categories/edit", { category: 1 });
				// }
				setTab(tab);
			}}
		>
			<Tabs.TabPane key="category" tab="Category">
				<Category />
			</Tabs.TabPane>
			{InfoAction()}
		</Tabs>
	);
};
export default Actions;
