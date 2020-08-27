import React from "react";
import { Layout } from "antd";
import classes from "./Content.module.scss";

interface Props {
	children: React.ReactNode;
}

const Content = ({ children }: Props) => {
	return (
		<Layout.Content className={classes.layout}>{children}</Layout.Content>
	);
};

export default Content;
