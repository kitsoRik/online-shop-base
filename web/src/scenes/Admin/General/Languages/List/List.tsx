import React from "react";
import { List as ListD } from "antd";
import { useGetLanguagesQuery } from "../../../../../generated/graphql";

const List = () => {
	const { data, loading } = useGetLanguagesQuery();

	const languages = data?.languages ?? [];

	return (
		<ListD
			bordered
			dataSource={languages}
			renderItem={language => <ListD.Item>{language.name}</ListD.Item>}
		/>
	);
};

export default List;
