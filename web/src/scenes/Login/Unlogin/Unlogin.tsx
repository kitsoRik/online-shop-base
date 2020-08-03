import React from "react";
import { Result, Button, notification } from "antd";
import {
	useUnloginMutation,
	CurrentUserDocument
} from "../../../generated/graphql";
import Page from "../../../shared/Page";
import { useApolloClient } from "@apollo/react-hooks";
import { Link } from "react-router-dom";

const Unlogin = () => {
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

	return (
		<Page>
			<Result
				status="warning"
				title="Ooy, you are loggined now, do you want leave?"
				extra={
					<>
						<Button type="primary" onClick={onUnlogin}>
							Yes, I want leave
						</Button>
						<Button onClick={onUnlogin}>
							<Link to="/">No, go to home page</Link>
						</Button>
					</>
				}
			/>
		</Page>
	);
};

export default Unlogin;
