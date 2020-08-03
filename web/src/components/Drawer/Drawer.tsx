import React, { useState, useEffect } from "react";
import { Drawer as DrawerD } from "antd";
import Menu from "./Menu";
import UserPanel from "./UserPanel";
import Footer from "./Footer";

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
			title={<UserPanel />}
			placement="right"
			closable={true}
			onClose={onClose}
			visible={visible}
			getContainer={false}
			bodyStyle={{
				padding: 0,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between"
			}}
		>
			<Menu />
			<Footer />
		</DrawerD>
	);
};

export let showDrawer: () => void;
export let closeDrawer: () => void;

export default Drawer;
