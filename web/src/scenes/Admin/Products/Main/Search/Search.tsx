import React, { useState } from "react";
import SearchD from "antd/lib/input/Search";
import { useFindProductInfoByNameTemplateQuery } from "../../../../../generated/graphql";
import { AutoComplete } from "antd";
import { useHistory } from "react-router";
import classes from "./Search.module.scss";
import { useQueryPush } from "react-location-query";

interface Props {
	initialValue?: string;
}

const Search = ({ initialValue }: Props) => {
	const [template, setTemplate] = useState("");

	const history = useHistory();

	const { data, loading } = useFindProductInfoByNameTemplateQuery({
		skip: template === "",
		variables: {
			template
		}
	});

	const productsInfo = data?.searchProducts.productsInfo ?? [];

	const options = productsInfo.map(info => ({
		value: info.name,
		key: info.product.id
	}));

	const queryPush = useQueryPush();

	return (
		<AutoComplete
			defaultValue={initialValue}
			className={classes.search}
			dropdownMatchSelectWidth={252}
			options={options}
			onChange={value => setTemplate(value)}
			onSelect={(v, { key }) => queryPush(`/admin/products/${key}`, {})}
		>
			<SearchD
				loading={loading}
				placeholder="Input product name"
				size="large"
			/>
		</AutoComplete>
	);
};

export default Search;
