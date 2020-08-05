import React from "react";
import { Tabs } from "antd";
import Actions from "./Actions";

const InfoAction = () => {
	return (
		<Tabs.TabPane key="info" tab="Info">
			<Actions />
		</Tabs.TabPane>
	);
};

export default InfoAction;
