import React from "react";
import { FilterGroup } from "../../../../../../../../../../generated/graphql";
import { Typography, Button } from "antd";
import classes from "./Header.module.scss";

interface Props {
	filterGroup: Exclude<{ id: string; name: string }, FilterGroup>;
}

const Header = ({ filterGroup }: Props) => {
	return (
		<div className={classes.header}>
			<Typography.Text>{filterGroup.name}</Typography.Text>
			<Button>Add new field</Button>
		</div>
	);
};
export default Header;
