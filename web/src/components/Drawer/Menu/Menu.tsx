import React from "react";
import { Menu as MenuD } from "antd";
import { closeDrawer } from "../Drawer";
import { InboxOutlined } from "@ant-design/icons";
import { Link } from "react-location-query";

const Menu = () => {
	return (
		<MenuD
			style={{ width: 256 }}
			defaultSelectedKeys={["1"]}
			defaultOpenKeys={["sub1"]}
			mode="inline"
			theme="dark"
			onClick={() => closeDrawer()}
			selectable={false}
		>
			<MenuD.Item>123</MenuD.Item>
			<MenuD.Item icon={<InboxOutlined />}>
				<Link to="/inbox" query={{}}>
					Inbox
				</Link>
			</MenuD.Item>
		</MenuD>
	);
};

export default Menu;
