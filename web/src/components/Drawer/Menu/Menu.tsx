import React from "react";
import { Menu as MenuD } from "antd";
import { closeDrawer } from "../Drawer";
import { InboxOutlined } from "@ant-design/icons";
import { Link } from "react-location-query";
import { useTranslation } from "react-i18next";

const Menu = () => {
	const { t } = useTranslation();
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
					{t("components.drawer.menu.inbox")}
				</Link>
			</MenuD.Item>
		</MenuD>
	);
};

export default Menu;
