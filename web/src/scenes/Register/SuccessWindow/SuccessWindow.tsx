import React from "react";
import { Typography, Result, Button } from "antd";

const SuccessWindow = () => {
	return (
		<Result
			status="success"
			title="Thanks for register, now you can login into your account"
			subTitle="But, you almost need to verify your email by proceed link from your email"
			extra={[
				<Button type="primary" key="console">
					Go to login form
				</Button>
			]}
		/>
	);
};

export default SuccessWindow;
