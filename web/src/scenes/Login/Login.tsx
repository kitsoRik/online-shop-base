import React from "react";
import Page from "../../shared/Page";
import Form from "./Form";
import { Typography } from "antd";
import { FormInstance } from "antd/lib/form";
import { useLoginMutation } from "../../generated/graphql";

const Login = () => {
	const [login] = useLoginMutation();

	const onLogin = async (
		email: string,
		password: string,
		remember: boolean,
		form: FormInstance
	) => {
		try {
			const user = await login({
				variables: {
					email,
					password,
					remember
				}
			});
			console.log(user);
		} catch (e) {
			switch (e.message) {
				case "UNKNOWN_DATA":
					form.setFields([
						{ name: "password", errors: ["Unknown data"] }
					]);
			}
		}
	};

	return (
		<Page>
			<Typography.Title level={2}>Register</Typography.Title>
			<Form onLogin={onLogin} />
		</Page>
	);
};

export default Login;
