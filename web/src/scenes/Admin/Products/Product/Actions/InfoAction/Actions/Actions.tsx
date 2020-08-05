import React from "react";
import { Tabs } from "antd";
import EditAction from "./EditAction";
import FieldsAction from "./FieldsAction";
import { useLocationField } from "react-location-query";

const Actions = () => {
	const [action, setAction] = useLocationField("action", {
		type: "string",
		initial: "editing",
		enum: ["editing", "category", "fields"]
	});

	return (
		<Tabs tabPosition="top">
			<Tabs.TabPane tab={<div>Ukrainian</div>}>
				<Tabs
					activeKey={action}
					tabPosition={"left"}
					style={{ height: 220 }}
					onTabClick={action => {
						// if (tab === "category") {
						// 	return queryPush("/admin/categories/edit", { category: 1 });
						// }
						setAction(action);
					}}
				>
					{EditAction()}
					{FieldsAction()}
				</Tabs>
			</Tabs.TabPane>
		</Tabs>
	);
};

export default Actions;
