import React from "react";
import classes from "./AdminSwitch.module.scss";
import { Switch } from "antd";
import { inject, observer } from "mobx-react";
import { User } from "../../../mobx/User";

interface Props {
	user?: User;
}

const AdminSwitch = ({ user }: Props) => {
	if (user!.role !== "admin") return null;
	return (
		<div className={classes.adminSwitch}>
			<Switch />
		</div>
	);
};

export default inject("user")(observer(AdminSwitch));
