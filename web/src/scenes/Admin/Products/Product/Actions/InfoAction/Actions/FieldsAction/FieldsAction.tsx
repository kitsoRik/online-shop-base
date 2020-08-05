import React from "react";
import { Tabs } from "antd";
import { useLocationFieldT } from "react-location-query";
import Content from "./Content";

const FieldsAction = () => {
	const [tab] = useLocationFieldT<string>("tab");
	return (
		<Tabs.TabPane key="fields" tab="Fields">
			<Content load={tab === "fields"} />
		</Tabs.TabPane>
	);
};

export default FieldsAction;
