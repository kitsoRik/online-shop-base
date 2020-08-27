import React from "react";
import { Button } from "antd";
import { useGoogleLogin } from "react-google-login";

const LoginWithButtons = () => {
	const { signIn, loaded } = useGoogleLogin({
		clientId:
			"555951383950-gimibqnd686oa1g22rj0ddmgh7mannop.apps.googleusercontent.com",
		scope: "profile email",
		onSuccess: res => {
			console.log(res);
		},
		onFailure: res => {
			console.log(res);
		}
	});

	const onLoginGoogle = async () => {
		const result = await signIn();
		console.log(result);
	};

	return (
		<>
			<Button onClick={() => onLoginGoogle()}>Login with google</Button>
		</>
	);
};

export default LoginWithButtons;
