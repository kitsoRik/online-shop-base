import React from "react";
import Page from "../../shared/Page";
import Form from "./Form";
import { Typography } from "antd";
import { FormInstance } from "antd/lib/form";
import {
	useLoginMutation,
	useCurrentUserQuery,
	CurrentUserDocument
} from "../../generated/graphql";
import Unlogin from "./Unlogin";
import { useApolloClient } from "@apollo/react-hooks";
import { useHistory } from "react-router";
import LoginWithButtons from "./LoginWithButtons";
import { useTranslation } from "react-i18next";

const Login = () => {
	const { t } = useTranslation();
	const [login] = useLoginMutation();

	const client = useApolloClient();
	const history = useHistory();
	const { data } = useCurrentUserQuery();

	if (data?.currentUser) {
		return <Unlogin />;
	}

	const onLogin = async (
		email: string,
		password: string,
		remember: boolean,
		form: FormInstance
	) => {
		try {
			const { data } = await login({
				variables: {
					email,
					password,
					remember
				}
			});
			const currentUser = data?.joinUser;
			if (!currentUser) throw new Error("Unknown user");
			client.writeQuery({
				query: CurrentUserDocument,
				data: {
					currentUser
				}
			});
			history.push("/");
		} catch (e) {
			switch (e.message) {
				case "UNKNOWN_DATA":
					form.setFields([
						{
							name: "password",
							errors: [t("scenes.login.error.unknownData")]
						}
					]);
			}
		}
	};

	return (
		<Page>
			<Typography.Title level={2}>
				{t("scenes.login.title")}
			</Typography.Title>
			<Form onLogin={onLogin} />
			<LoginWithButtons />
		</Page>
	);
};

export default Login;
