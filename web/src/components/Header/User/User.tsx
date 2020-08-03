import React from "react";
import { useCurrentUserQuery } from "../../../generated/graphql";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
import { showDrawer } from "../../Drawer/Drawer";

const User = () => {
	const { data, loading } = useCurrentUserQuery();

	if (loading) return <div>Loading...</div>;

	if (!data?.currentUser) {
		return (
			<div>
				<Button>
					<Link to="/login">Log in</Link>
				</Button>
			</div>
		);
	}

	const openUserPanel = () => {
		showDrawer();
	};

	return (
		<div>
			<Avatar
				size="large"
				icon={<UserOutlined onClick={openUserPanel} />}
			/>
		</div>
	);
};

export default User;
