import React from "react";
import { Layout } from "antd";
import User from "./User";
import classes from "./Header.module.scss";

const Header = () => {
	return (
		<Layout.Header className={classes.header}>
			<div></div>
			<User />
		</Layout.Header>
	);
};

export default Header;
