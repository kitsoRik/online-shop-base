import React, { useEffect } from "react";
import Routes from "./Routes";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Admin = () => {
	return <Routes />;
};

export const AdminHeader = () => {
	return (
		<Menu theme="dark" mode="horizontal" selectable={false}>
			<Menu.SubMenu title="Categories">
				<Menu.Item>
					<Link to="/admin/categories/create">Create</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/admin/categories/edit?tab=editing">View</Link>
				</Menu.Item>
			</Menu.SubMenu>
			<Menu.SubMenu title="Products">
				<Menu.Item>
					<Link to="/admin/products/create">Create</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/admin/products">View</Link>
				</Menu.Item>
			</Menu.SubMenu>
		</Menu>
	);
};

export default Admin;
