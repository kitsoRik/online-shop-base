import React from "react";
import { FilterField } from "../../../../../../../../../../generated/graphql";
import { Typography } from "antd";

interface Props {
	item: Exclude<{ id: string; type: string }, FilterField>;
}

const TypeContent = ({ item }: Props) => {
	return <Typography.Text>{item.type}</Typography.Text>;
};

export default TypeContent;
