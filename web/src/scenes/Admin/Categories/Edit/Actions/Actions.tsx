import React from "react";
import { Category } from "../../../../../generated/graphql";
import { Menu, Tabs } from "antd";
import EditContent from "./EditContent";
import { useLocationField } from "react-location-query";

interface Props {
	category: Category | null;
}

const Actions = ({ category }: Props) => {
	const [tab] = useLocationField("tab", {
		type: "string",
		initial: "editing",
		enum: ["editing"]
	});

	if (!category) return null;

	return (
		<Tabs defaultActiveKey="1" tabPosition={"left"} style={{ height: 220 }}>
			<Tabs.TabPane tab="Editing" active={tab === "editing"}>
				<EditContent category={category} />
			</Tabs.TabPane>
		</Tabs>
	);
};

export default Actions;
