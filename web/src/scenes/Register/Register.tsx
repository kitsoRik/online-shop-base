import React from "react";
import Page from "../../shared/Page";
import Form from "./Form";
import { Typography } from "antd";
import { FormInstance } from "antd/lib/form";
import { useRegisterMutation } from "../../generated/graphql";

const Register = () => {
	const [register, {}] = useRegisterMutation();

	const onRegister = async (
		firstName: string,
		lastName: string,
		middleName: string,
		phone: string,
		email: string,
		password: string,
		form: FormInstance
	) => {
		try {
			const newUser = await register({
				variables: {
					email,
					firstName,
					lastName,
					password,
					middleName,
					phone
				}
			});
			console.log(newUser);
		} catch (e) {
			switch (e.message) {
				case "EMAIL_IS_BUSY":
					form.setFields([
						{ name: "email", errors: ["Email is busy"] }
					]);
			}
		}
	};

	return (
		<Page>
			<Typography.Title level={2}>Register</Typography.Title>
			<Form onRegister={onRegister} />
		</Page>
	);
};

export default Register;
