import React from "react";
import { Result, Button, notification } from "antd";
import {
	useUnloginMutation,
	CurrentUserDocument
} from "../../../generated/graphql";
import Page from "../../../shared/Page";
import { useApolloClient } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Unlogin = () => {
	const { t } = useTranslation();
	const [unlogin] = useUnloginMutation();

	const client = useApolloClient();

	const onUnlogin = async () => {
		try {
			const unlogined = await unlogin();
			if (unlogined) {
				notification.success({
					message: t("scenes.login.unlogin.success")
				});
			}
		} catch (e) {
			notification.error({
				message: t("scenes.login.unlogin.error")
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
				title={t("scenes.login.unlogin.title")}
				extra={
					<>
						<Button type="primary" onClick={onUnlogin}>
							{t("scenes.login.unlogin.ok")}
						</Button>
						<Button onClick={onUnlogin}>
							<Link to="/">{t("scenes.login.unlogin.no")}</Link>
						</Button>
					</>
				}
			/>
		</Page>
	);
};

export default Unlogin;
