import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import User from "./User";
import classes from "./Header.module.scss";

const Header = () => {
	const [content, setContent] = useState<React.ReactNode>(null);

	useEffect(() => {
		setHeaderContent = (element: React.ReactNode) => {
			setContent(element);
			return () => {
				setContent(null);
			};
		};
	}, []);

	return (
		<Layout.Header className={classes.header}>
			<>{content}</>
			<User />
		</Layout.Header>
	);
};

export let setHeaderContent: (element: React.ReactNode) => () => void;

export default Header;
