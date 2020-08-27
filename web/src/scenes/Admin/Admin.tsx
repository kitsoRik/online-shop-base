import React, { useEffect } from "react";
import Routes from "./Routes";
import { Menu } from "antd";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Admin = () => {
	return <Routes />;
};

export const AdminHeader = () => {
	const { t } = useTranslation();

	const { id } = useParams();

	return (
		<Menu theme="dark" mode="horizontal" selectable={false}>
			<Menu.SubMenu title={t("admin.menu.general.title")}>
				<Menu.Item>
					<Link to="/admin/general/information">
						{t("admin.menu.general.information")}
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/admin/general/languages">
						{t("admin.menu.general.languages")}
					</Link>
				</Menu.Item>
			</Menu.SubMenu>
			<Menu.SubMenu title={t("admin.menu.categories.title")}>
				<Menu.Item>
					<Link to="/admin/categories/create">
						{t("admin.menu.categories.create")}
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to={`/admin/categories/`}>
						{t("admin.menu.categories.view")}
					</Link>
				</Menu.Item>
			</Menu.SubMenu>
			<Menu.SubMenu title={t("admin.menu.products.title")}>
				<Menu.Item>
					<Link to="/admin/products/create">
						{t("admin.menu.products.create")}
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/admin/products">
						{t("admin.menu.products.view")}
					</Link>
				</Menu.Item>
			</Menu.SubMenu>
		</Menu>
	);
};

export default Admin;
