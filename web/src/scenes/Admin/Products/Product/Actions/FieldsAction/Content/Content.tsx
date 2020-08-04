import React from "react";
import {
	useGetFieldsProductByIdQuery,
	Category
} from "../../../../../../../generated/graphql";
import { Button, List } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useLocationField, useLocationFieldT } from "react-location-query";
import FieldItem from "./FieldItem";

interface Props {
	load: boolean;
}

const Content = ({ load }: Props) => {
	const [productId] = useLocationFieldT<number>("product");
	const [, setAdd] = useLocationField("add", {
		type: "boolean",
		initial: false,
		hideIfInitial: true
	});

	const [] = useLocationField("modify", {
		type: "string",
		initial: "",
		hideIfInitial: true
	});

	const { data, loading } = useGetFieldsProductByIdQuery({
		skip: !load,
		variables: { id: productId }
	});

	if (loading || !load) return null;

	const product = (data?.products || [null])[0];

	if (!product) throw new Error("Unknown category");

	const fields = product.fields ?? [];

	return (
		<>
			<List
				itemLayout="horizontal"
				dataSource={fields}
				renderItem={field => <FieldItem field={field} />}
			/>
			<div>
				<Button type="dashed" block onClick={() => setAdd(true)}>
					<PlusOutlined />
					Add field
				</Button>
			</div>
		</>
	);
};

export default Content;
