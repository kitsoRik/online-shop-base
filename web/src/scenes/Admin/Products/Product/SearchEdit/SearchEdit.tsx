import React, { useState } from "react";
import Search from "../../Main/Search";
import { Category, Product } from "../../../../../generated/graphql";
import { useLocationField } from "react-location-query";

interface Props {
	onProductChange: (product: { id: number }) => void;
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
			}}
		/>
	);
};

export default SearchEdit;
