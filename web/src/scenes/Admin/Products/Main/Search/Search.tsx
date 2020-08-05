import React, { useState } from "react";
import SearchD from "antd/lib/input/Search";
import { Category, Product } from "../../../../../generated/graphql";
import { useFindProductByNameTemplateQuery } from "../../../../../generated/graphql";
import { AutoComplete } from "antd";
import { useHistory } from "react-router";
import classes from "./Search.module.scss";

interface Props {
	initialValue?: string;
	onProductChange: (product: { id: number }) => void;
}

const Search = ({ initialValue, onProductChange }: Props) => {
	const [template, setTemplate] = useState("");

	const history = useHistory();

	const { data, loading } = useFindProductByNameTemplateQuery({
		skip: template === "",
		variables: {
			template
		}
	});

	const products = data?.findProductByNameTemplate ?? [];

	const options = products.map(product => ({
		value: "qwe",
		key: product.id
	}));

	return (
		<AutoComplete
			defaultValue={initialValue}
			className={classes.search}
			dropdownMatchSelectWidth={252}
			options={options}
			onChange={value => setTemplate(value)}
			onSelect={(v, { key }) =>
				onProductChange(products.find(c => c.id === key)!)
			}
			onClick={() => {
				if (
					!history.location.pathname.startsWith(
						"/admin/products/edit"
					)
				) {
					history.push("/admin/products/edit");
				}
			}}
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
