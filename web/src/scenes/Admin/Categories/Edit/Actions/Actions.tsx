import React from "react";
import { Category } from "../../../../../generated/graphql";
import { Menu, Tabs } from "antd";
import EditContent from "./EditContent";
import { useLocationField } from "react-location-query";
import ChildrenContent from "./ChildrenContent";

interface Props {
	category: Category | null;
}

const Actions = ({ category }: Props) => {
	const [tab, setTab] = useLocationField("tab", {
		type: "string",
		initial: "editing",
		enum: ["editing", "subcategories"]
	});

	if (!category) return null;

	return (
		<Tabs
			activeKey={tab}
			tabPosition={"left"}
			style={{ height: 220 }}
			onTabClick={tab => setTab(tab)}
		>
			<Tabs.TabPane key="editing" tab="Editing">
				<EditContent category={category} />
			</Tabs.TabPane>
			<Tabs.TabPane key="subcategories" tab="Subcategories">
				<ChildrenContent category={category} />
			</Tabs.TabPane>
		</Tabs>
	);
};

export default Actions;
