import React from "react";
import { Category } from "../../../../../generated/graphql";
import { Menu, Tabs } from "antd";
import EditContent from "./EditAction/Content";
import { useLocationField, useQueryPush } from "react-location-query";
import FieldsContent from "./FieldsAction/Content";
import CategoryAction from "./CategoryAction";
import EditAction from "./EditAction";
import FieldsAction from "./FieldsAction";

const Actions = () => {
	const [tab, setTab] = useLocationField("tab", {
		type: "string",
		initial: "editing",
		enum: ["editing", "fields"]
	});

	return (
		<Tabs
			activeKey={tab}
			tabPosition={"left"}
			style={{ height: 220 }}
			onTabClick={tab => {
				// if (tab === "category") {
				// 	return queryPush("/admin/categories/edit", { category: 1 });
				// }
				setTab(tab);
			}}
		>
			{EditAction()}
			{CategoryAction()}
			{FieldsAction()}
		</Tabs>
	);
};
export default Actions;
