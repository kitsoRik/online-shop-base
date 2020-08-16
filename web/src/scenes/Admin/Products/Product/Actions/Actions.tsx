import React from "react";
import { Tabs } from "antd";
import { useLocationField } from "react-location-query";
import InfoAction from "./InfoAction";
import { Link } from "react-location-query";
import { useFindCategoryByIdQuery } from "../../../../../generated/graphql";
import Category from "./Category";
import { useParams } from "react-router";

const Actions = () => {
	const { id } = useParams();
	const productId = +id;
	const [tab, setTab] = useLocationField("tab", {
		type: "string",
		initial: "info",
		enum: ["info", "category"]
	});

	const { data, loading } = useFindCategoryByIdQuery({
		skip: productId === -1,
		variables: { id: productId }
	});

	const category = (data?.categories ?? [null])[0];

	return (
		<Tabs
			activeKey={tab}
			tabPosition={"left"}
			onTabClick={tab => {
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
