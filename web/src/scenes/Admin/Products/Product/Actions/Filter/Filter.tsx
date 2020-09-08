import React from "react";
import {
	useGetProductFilterValuesQuery,
	useInitializeFilterValueMutation,
	useChangeFilterValueMutation
} from "../../../../../../generated/graphql";
import { Spin } from "antd";
import List from "./List";
import groupsToFields from "./utils/groupsToFields";
import writeInitializedFieldToCache from "./utils/writeInitializedFieldToCache";
import { useApolloClient } from "@apollo/client";

interface Props {
	productId: number;
}

const Filter = ({ productId }: Props) => {
	const { data, loading } = useGetProductFilterValuesQuery({
		variables: {
			productId
		}
	});

	const client = useApolloClient();

	const [initializeFilterValue] = useInitializeFilterValueMutation();
	const [changeFilterValue] = useChangeFilterValueMutation();

	if (loading) return <Spin />;

	const product = data?.products[0];

	if (!product) return null;

	const filterFields = groupsToFields<{
		id: string;
		name: string;
	}>(product.category.filter.groups); // write here fields of field type

	const filterValues = product.filterValues;

	const onInitializeField = async (filterFieldId: string, value: string) => {
		try {
			const { data } = await initializeFilterValue({
				variables: {
					filterFieldId,
					value,
					productId
				}
			});
			if (data)
				writeInitializedFieldToCache(
					client,
					data.initializeFilterValue,
					productId
				);
		} catch (e) {
			console.log(e.message);
		}
	};

	const onChangeField = async (filterValueId: string, value: string) => {
		try {
			const {} = await changeFilterValue({
				variables: {
					filterValueId,
					value
				}
			});
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<>
			<List
				fields={filterFields}
				values={filterValues}
				onFieldChanged={onChangeField}
				onFieldInitialized={onInitializeField}
			/>
		</>
	);
};

export default Filter;
