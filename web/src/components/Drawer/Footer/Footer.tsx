import React from "react";
import {
	useUnloginMutation,
	CurrentUserDocument
} from "../../../generated/graphql";
import { Menu, notification, Button } from "antd";
import { useApolloClient } from "@apollo/react-hooks";
import classes from "./Footer.module.scss";
import { closeDrawer } from "../Drawer";

const Footer = () => {
	const [unlogin] = useUnloginMutation();

	const client = useApolloClient();

	const onUnlogin = async () => {
		try {
			const unlogined = await unlogin();
			if (unlogined) {
				notification.success({
					message: "You have left from your profile"
				});
			}
		} catch (e) {
			notification.error({
				message:
					"Server response error, but you've left from your profile localy"
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
				Logout
			</Button>
		</div>
	);
};

export default Footer;
