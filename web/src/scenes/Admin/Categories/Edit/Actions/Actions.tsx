import React from "react";
import { Category } from "../../../../../generated/graphql";
import { Menu, Tabs } from "antd";
import EditContent from "./EditContent";
import { useLocationField } from "react-location-query";
import ChildrenContent from "./ChildrenContent";
import ParentContent from "./ParentContent";
import FieldsContent from "./FieldsContent";

interface Props {
	category: Category | null;
}

const Actions = ({ category }: Props) => {
	const [tab, setTab] = useLocationField("tab", {
		type: "string",
		initial: "editing",
		enum: ["editing", "subcategories", "parent", "fields"]
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
				<EditContent category={category} load={tab === "edit"} />
			</Tabs.TabPane>
			<Tabs.TabPane key="subcategories" tab="Subcategories">
				<ChildrenContent
					category={category}
					load={tab === "subcategories"}
				/>
			</Tabs.TabPane>
			<Tabs.TabPane key="parent" tab="Parent category">
				<ParentContent category={category} load={tab === "parent"} />
			</Tabs.TabPane>
			<Tabs.TabPane key="fields" tab="Fields">
				<FieldsContent category={category} load={tab === "fields"} />
			</Tabs.TabPane>
		</Tabs>
	);
};

export default Actions;
