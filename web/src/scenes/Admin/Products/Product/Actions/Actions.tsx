import React from "react";
import { Tabs } from "antd";
import { useLocationField } from "react-location-query";
import CategoryAction from "./CategoryAction";
import InfoAction from "./InfoAction";

const Actions = () => {
	const [tab, setTab] = useLocationField("tab", {
		type: "string",
		initial: "info",
		enum: ["info", "category"]
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
			{CategoryAction()}
			{InfoAction()}
		</Tabs>
	);
};
export default Actions;
