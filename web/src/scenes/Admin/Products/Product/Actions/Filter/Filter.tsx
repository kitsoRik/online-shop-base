import React from "react";
import { useGetProductFilterValuesQuery } from "../../../../../../generated/graphql";
import { Spin } from "antd";
import List from "./List";
import groupsToFields from "./utils/groupsToFields";

interface Props {
	productId: number;
}

const Filter = ({ productId }: Props) => {
	const { data, loading } = useGetProductFilterValuesQuery({
		variables: {
			productId
		}
	});

	if (loading) return <Spin />;

	const product = data?.products[0];

	if (!product) return null;

	const filterFields = groupsToFields<{
		id: string;
	}>(product.category.filter.groups); // write here fields of field type

    const filterValues = product.filterValues;
    
	return (
		<>
			<List fields={filterFields} values={filterValues} />
		</>
	);
};

export default Filter;
