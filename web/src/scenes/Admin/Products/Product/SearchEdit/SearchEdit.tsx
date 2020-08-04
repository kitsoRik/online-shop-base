import React, { useState } from "react";
import Search from "../../Main/Search";
import { Category } from "../../../../../generated/graphql";
import { useLocationField } from "react-location-query";

interface Props {
	onProductChange: (category: Category) => void;
}

const SearchEdit = ({ onProductChange }: Props) => {
	const [name, setName] = useLocationField("productName", {
		type: "string",
		initial: "",
		hideIfInitial: true
	});

	return (
		<Search
			initialValue={name}
			onProductChange={product => {
				onProductChange(product);
				setName(product.name);
			}}
		/>
	);
};

export default SearchEdit;
