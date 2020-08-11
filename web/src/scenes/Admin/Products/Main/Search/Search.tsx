import React, { useState } from "react";
import SearchD from "antd/lib/input/Search";
import { useFindProductInfoByNameTemplateQuery } from "../../../../../generated/graphql";
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

	const { data, loading } = useFindProductInfoByNameTemplateQuery({
		skip: template === "",
		variables: {
			template
		}
	});

	const productsInfo = data?.findProductInfoByNameTemplate ?? [];

	const options = productsInfo.map(info => ({
		value: info.name,
		key: info.product.id
	}));

	return (
		<AutoComplete
			defaultValue={initialValue}
			className={classes.search}
			dropdownMatchSelectWidth={252}
			options={options}
			onChange={value => setTemplate(value)}
			onSelect={(v, { key }) =>
				onProductChange(productsInfo.find(c => c.product.id === key)!)
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
