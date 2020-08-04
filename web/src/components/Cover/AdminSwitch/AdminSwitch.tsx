import React from "react";
import classes from "./AdminSwitch.module.scss";
import { Switch } from "antd";

const AdminSwitch = () => {
	return (
		<div className={classes.adminSwitch}>
			<Switch />
		</div>
	);
};

export default AdminSwitch;
