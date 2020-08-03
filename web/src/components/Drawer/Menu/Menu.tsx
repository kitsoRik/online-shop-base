import React from "react";
import { Menu as MenuD } from "antd";
import {
	AppstoreOutlined,
	SettingOutlined,
	MailOutlined
} from "@ant-design/icons";
const Menu = () => {
	return (
		<MenuD
			style={{ width: 256 }}
			defaultSelectedKeys={["1"]}
			defaultOpenKeys={["sub1"]}
			mode="inline"
			theme="dark"
		>
			<MenuD.SubMenu
				key="sub1"
				title={
					<span>
						<MailOutlined />
						<span>Navigation One</span>
					</span>
				}
			>
				<MenuD.ItemGroup key="g1" title="Item 1">
					<MenuD.Item key="1">Option 1</MenuD.Item>
					<MenuD.Item key="2">Option 2</MenuD.Item>
				</MenuD.ItemGroup>
				<MenuD.ItemGroup key="g2" title="Item 2">
					<MenuD.Item key="3">Option 3</MenuD.Item>
					<MenuD.Item key="4">Option 4</MenuD.Item>
				</MenuD.ItemGroup>
			</MenuD.SubMenu>
			<MenuD.SubMenu
				key="sub2"
				icon={<AppstoreOutlined />}
				title="Navigation Two"
			>
				<MenuD.Item key="5">Option 5</MenuD.Item>
				<MenuD.Item key="6">Option 6</MenuD.Item>
				<MenuD.SubMenu key="sub3" title="Submenu">
					<MenuD.Item key="7">Option 7</MenuD.Item>
					<MenuD.Item key="8">Option 8</MenuD.Item>
				</MenuD.SubMenu>
			</MenuD.SubMenu>
			<MenuD.SubMenu
				key="sub4"
				title={
					<span>
						<SettingOutlined />
						<span>Navigation Three</span>
					</span>
				}
			>
				<MenuD.Item key="9">Option 9</MenuD.Item>
				<MenuD.Item key="10">Option 10</MenuD.Item>
				<MenuD.Item key="11">Option 11</MenuD.Item>
				<MenuD.Item key="12">Option 12</MenuD.Item>
			</MenuD.SubMenu>
		</MenuD>
	);
};

export default Menu;
