import React from "react";
import { useLocationFieldT } from "react-location-query";
import Content from "./Content";

const FieldsAction = () => {
	const [action] = useLocationFieldT<string>("action");
	return <Content load={action === "fields"} />;
};

export default FieldsAction;
