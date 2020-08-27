import React from "react";
import { useCurrentUserQuery } from "../../../generated/graphql";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
import classes from "./UserPanel.module.scss";

const UserPanel = () => {
	const { data } = useCurrentUserQuery();
	const user = data?.currentUser;

	if (!user) return null;

	return (
		<div>
			{user.lastName} {user.firstName}
			<Avatar
				className={classes.avatar}
				size={128}
				icon={<UserOutlined />}
			/>
		</div>
	);
};

export default UserPanel;
