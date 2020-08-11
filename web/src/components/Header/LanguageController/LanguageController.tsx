import React from "react";
import { useGetApplicationLanguagesQuery } from "../../../generated/graphql";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

const LanguageController = () => {
	const { i18n } = useTranslation();
	const { data } = useGetApplicationLanguagesQuery();

	const languages = data?.languages ?? [];

	const onChange = (value: string) => {
		i18n.changeLanguage(value);
	};

	return (
		<>
			<Select onChange={onChange} value={i18n.language}>
				{languages.map(l => (
					<Select.Option value={l.code}>{l.code}</Select.Option>
				))}
			</Select>
		</>
	);
};

export default LanguageController;
