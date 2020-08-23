import React from "react";
import { useGetCategoryFilterQuery } from "../../../../../../generated/graphql";
import { useParams } from "react-router";
import UninitializedFilterContent from "./UninitializedFilterContent";
import { Spin } from "antd";
import InitializedFilterContent from "./InitializedFilterContent";

const FilterContent = () => {
	const { data, loading } = useGetCategoryFilterQuery({
		variables: {
			categoryId: +(useParams() as any).id
		}
	});

	const category = data?.categories?.[0];
	const filter = category?.filter;

	if (loading) return <Spin spinning={true}></Spin>;

    if (!filter) return <UninitializedFilterContent />;
    
	return <InitializedFilterContent />;
};

export default FilterContent;
