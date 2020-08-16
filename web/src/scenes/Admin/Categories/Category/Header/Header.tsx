import React from "react";
import { PageHeader, Tag } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useQueryPush } from "react-location-query";

const Header = () => {
	const queryPush = useQueryPush();

	const onBack = () => {
		queryPush("/admin/categories", {});
	};

	return (
		<PageHeader
			onBack={onBack}
			title="Category"
			backIcon={<HomeOutlined />}
			tags={<Tag color="red">Not saved</Tag>}
		></PageHeader>
	);
};

export default Header;
