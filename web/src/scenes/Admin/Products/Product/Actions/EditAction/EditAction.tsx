import React from "react";
import { Tabs } from "antd";
import { useLocationFieldT } from "react-location-query";
import Content from "./Content";

const EditAction = () => {
	const [tab] = useLocationFieldT<string>("tab");

	return (
		<Tabs.TabPane key="editing" tab="Editing">
			<Content load={tab === "edit"} />
		</Tabs.TabPane>
	);
};

export default EditAction;
