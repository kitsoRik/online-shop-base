import React, { useState, useEffect } from "react";
import { Drawer as DrawerD } from "antd";
import Menu from "./Menu";

const Drawer = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		showDrawer = () => setVisible(true);
		closeDrawer = () => setVisible(false);
	}, []);

	const onClose = () => {
		closeDrawer();
	};

	return (
		<DrawerD
			title="Basic Drawer"
			placement="right"
			closable={true}
			onClose={onClose}
			visible={visible}
			getContainer={false}
			bodyStyle={{ padding: 0 }}
		>
			<Menu />
		</DrawerD>
	);
};

export let showDrawer: () => void;
export let closeDrawer: () => void;

export default Drawer;
