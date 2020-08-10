import React from "react";
import { Typography, Result, Button } from "antd";
import { useTranslation } from "react-i18next";

const SuccessWindow = () => {
	const { t } = useTranslation();

	return (
		<Result
			status="success"
			title={t("scenes.register.successWindow.title")}
			subTitle={t("scenes.register.successWindow.subTitle")}
			extra={[
				<Button type="primary" key="console">
					{t("scenes.register.successWindow.loginLink")}
				</Button>
			]}
		/>
	);
};

export default SuccessWindow;
