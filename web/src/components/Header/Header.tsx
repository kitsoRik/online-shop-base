import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import UserComponent from "./User";
import classes from "./Header.module.scss";
import { inject, observer } from "mobx-react";
import { User } from "../../mobx/User";
import { AdminHeader } from "../../scenes/Admin/Admin";
import Logo from "./Logo";
import Search from "./Search";
import LanguageController from "./LanguageController";

interface Props {
	user?: User;
}

const Header = ({ user }: Props) => {
	if (user?.adminView) {
		return (
			<Layout.Header className={classes.header}>
				<div className={classes.layout}>
					<AdminHeader />
					<div></div>
					<div className={classes.rightContainer}>
						<UserComponent />
					</div>
				</div>
			</Layout.Header>
		);
	}
	return (
		<Layout.Header className={classes.header}>
			<div className={classes.layout}>
				<div className={classes.leftContainer}>
					<Logo />
				</div>
				<Search />
				<div className={classes.rightContainer}>
					<LanguageController />
					<UserComponent />
				</div>
			</div>
		</Layout.Header>
	);
};

export default inject("user")(observer(Header));
