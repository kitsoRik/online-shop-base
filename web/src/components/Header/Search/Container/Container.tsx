import React, { useState } from "react";
import { Tabs, Typography, Spin } from "antd";
import classes from "./Container.module.scss";
import { useSearchProductsCategoryQuery } from "../../../../generated/graphql";
import { inject, observer } from "mobx-react";
import { User } from "../../../../mobx/User";
import { useTranslation } from "react-i18next";
import Categories from "./Categories";
import Content from "./Content";
import { useLocationField, useLocationFieldT } from "react-location-query";

interface Props {
	user?: User;
}

const Container = ({ user }: Props) => {
	const { i18n } = useTranslation();

	const [search] = useLocationFieldT<boolean>("search");
	const [searchText] = useLocationFieldT<string>("search_text");

	const { data, loading } = useSearchProductsCategoryQuery({
		skip: !search,
		variables: {
			nameTemplate: searchText,
			languageCode: i18n.language
		}
	});

	const categories = data?.searchProductsCategory ?? [];

	return (
		<div className={classes.container}>
			<Spin spinning={loading}>
				<Categories categories={categories} content={<Content categories={categories}/>} />
			</Spin>
		</div>
	);
};

export default inject("user")(observer(Container));
