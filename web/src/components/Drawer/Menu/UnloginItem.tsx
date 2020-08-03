import React from "react";
import {
	useUnloginMutation,
	CurrentUserDocument
} from "../../../generated/graphql";
import { Menu, notification } from "antd";
import { useApolloClient } from "@apollo/react-hooks";

const UnloginItem = () => {
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
	};

	return <div onClick={onUnlogin}>Logout</div>;
};

export default UnloginItem;
