import React from "react";
import { useLocationFieldT } from "react-location-query";
import Content from "./Content";

const EditAction = () => {
	const [action] = useLocationFieldT<string>("action");

	return <Content load={action === "edit"} />;
};

export default EditAction;
