import React, { useState } from "react";
import Search from "../../Main/Search";
import { Category } from "../../../../../generated/graphql";
import { useLocationField } from "react-location-query";

interface Props {
	onCategoryChange: (category: Category) => void;
}

const SearchEdit = ({ onCategoryChange }: Props) => {
	const [name, setName] = useLocationField("categoryName", {
		type: "string",
		initial: "",
		hideIfInitial: true
	});

	return (
		<Search
			initialValue={name}
			onCategoryChange={category => {
				console.log(category);
				onCategoryChange(category);
				setName(category.name);
			}}
		/>
	);
};

export default SearchEdit;
