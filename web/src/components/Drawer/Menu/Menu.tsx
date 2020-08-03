import React from "react";
import { Menu as MenuD } from "antd";
import { closeDrawer } from "../Drawer";

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
		</MenuD>
	);
};

export default Menu;
