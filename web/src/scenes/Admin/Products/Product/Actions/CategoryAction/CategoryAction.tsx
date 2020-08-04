import React from "react";
import { Tabs } from "antd";
import { useQueryPush } from "react-location-query";

const CategoryAction = () => {
	const queryPush = useQueryPush();
	return <Tabs.TabPane key="category" tab="Category"></Tabs.TabPane>;
};

export default CategoryAction;
