import React from "react";
import { Category } from "../../../../../generated/graphql";
import { Menu, Tabs } from "antd";
import EditContent from "./EditContent";
import { useLocationField } from "react-location-query";
import ChildrenContent from "./ChildrenContent";
import ParentContent from "./ParentContent";
import FieldsContent from "./FieldsContent";
import InfoContent from "./InfoContent/InfoContent";
import FilterContent from "./FilterContent";

interface Props {
	category: {
		id: number;
		name: string;
		level: number;
		parent?: { id: number; name: string } | null;
	} | null;
}

const Actions = ({ category }: Props) => {
	const [tab, setTab] = useLocationField("tab", {
		type: "string",
		initial: "editing",
		enum: ["editing", "info", "subcategories", "parent", "fields", "filter"]
	});

	return (
		<Tabs
			activeKey={tab}
			tabPosition={"left"}
			onTabClick={tab => setTab(tab)}
		>
			<Tabs.TabPane key="editing" tab="Editing">
				<EditContent category={category} load={tab === "edit"} />
			</Tabs.TabPane>
			<Tabs.TabPane
				key="info"
				tab="Info"
				disabled={category?.level !== 2}
			>
				<InfoContent />
			</Tabs.TabPane>
			<Tabs.TabPane
				key="subcategories"
				tab="Subcategories"
				disabled={!category || category.level === 2}
			>
				<ChildrenContent
					category={category}
					load={tab === "subcategories"}
				/>
			</Tabs.TabPane>
			<Tabs.TabPane
				key="parent"
				tab="Parent category"
				disabled={category?.level === 0}
			>
				<ParentContent category={category} load={tab === "parent"} />
			</Tabs.TabPane>
			<Tabs.TabPane
				key="fields"
				tab="Fields"
				disabled={category?.level !== 2}
			>
				<FieldsContent load={tab === "fields"} />
			</Tabs.TabPane>
			<Tabs.TabPane
				key="filter"
				tab="Filter"
				disabled={category?.level !== 2}
			>
				<FilterContent />
			</Tabs.TabPane>
		</Tabs>
	);
};

export default Actions;
