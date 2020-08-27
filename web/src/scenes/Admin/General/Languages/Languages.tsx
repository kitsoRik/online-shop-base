import React from "react";
import Page from "../../../../shared/Page";
import { Tabs } from "antd";
import New from "./New";
import List from "./List";
import { useLocationField } from "react-location-query";

const Languages = () => {
	const [tab, setTab] = useLocationField("tab", {
		type: "string",
		initial: "new",
		enum: ["new", "list"]
	});

	return (
		<Page vAlign="stretch" hAlign="stretch">
			<Tabs
				activeKey={tab}
				tabPosition="left"
				onTabClick={tab => setTab(tab)}
			>
				<Tabs.TabPane key="new" tab="New">
					<New />
				</Tabs.TabPane>
				<Tabs.TabPane key="list" tab="List">
					<List />
				</Tabs.TabPane>
			</Tabs>
		</Page>
	);
};

export default Languages;
