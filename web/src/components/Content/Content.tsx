import React from "react";
import { Layout } from "antd";

interface Props {
	children: React.ReactNode;
}

const Content = ({ children }: Props) => {
	return <Layout.Content>{children}</Layout.Content>;
};

export default Content;
