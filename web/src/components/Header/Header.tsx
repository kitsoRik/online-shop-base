import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import UserComponent from "./User";
import classes from "./Header.module.scss";
import { inject, observer } from "mobx-react";
import { User } from "../../mobx/User";
import { AdminHeader } from "../../scenes/Admin/Admin";

interface Props {
	user?: User;
}

const Header = ({ user }: Props) => {
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
			{user?.adminView ? <AdminHeader /> : <>{content ?? <div></div>}</>}
			<UserComponent />
		</Layout.Header>
	);
};

export let setHeaderContent: (element: React.ReactNode) => () => void;

export default inject("user")(observer(Header));
