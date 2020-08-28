import React from "react";
import {
	useGetFieldsCategoryInfoByIdQuery,
	Category,
	CategoryField
} from "../../../../../../../../generated/graphql";
import { Button, List, Tabs } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useLocationField, useLocationFieldT } from "react-location-query";
import CategoryFields from "./CategoryFields";
import { useParams } from "react-router";

interface Props {
	load: boolean;
}

const Content = ({ load }: Props) => {
	const { id } = useParams();
	const categoryId = +id;

	const [infoId] = useLocationFieldT<number>("info");

	const [] = useLocationField("modify", {
		type: "number",
		initial: -1,
		hideIfInitial: true
	});

	const { data, loading } = useGetFieldsCategoryInfoByIdQuery({
		skip: !load,
		variables: { id: categoryId }
	});
	if (loading || !load) return null;

	const category = (data?.categories || [null])[0];

	if (!category) throw new Error("Unknown category");

	const categoryFields = category.fields ?? [];
	const categoryInfoFields =
		category.info?.find(i => i.id === infoId)?.fields ?? [];

	return (
		<>
			<CategoryFields
				categoryFields={categoryFields}
				categoryInfoFields={categoryInfoFields}
			/>
		</>
	);
};

export default Content;
