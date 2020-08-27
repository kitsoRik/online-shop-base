import React from "react";
import {
	useUnloginMutation,
	CurrentUserDocument
} from "../../../generated/graphql";
import { Menu, notification, Button } from "antd";
import { useApolloClient } from "@apollo/react-hooks";
import classes from "./Footer.module.scss";
import { closeDrawer } from "../Drawer";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();
	const [unlogin] = useUnloginMutation();

	const client = useApolloClient();

	const onUnlogin = async () => {
		try {
			const unlogined = await unlogin();
			if (unlogined) {
				notification.success({
					message: t("components.drawer.footer.logout.success")
				});
			}
		} catch (e) {
			notification.error({
				message: t("components.drawer.footer.logout.error")
			});
		}
		client.writeQuery({
			query: CurrentUserDocument,
			data: {
				currentUser: null
			}
		});
		closeDrawer();
	};

	return (
		<div className={classes.footer}>
			<Button
				className={classes.logout}
				onClick={onUnlogin}
				type="primary"
			>
				{t("components.drawer.footer.logout.label")}
			</Button>
		</div>
	);
};

export default Footer;
