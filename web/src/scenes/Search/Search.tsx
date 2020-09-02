import React from "react";
import { useLocationField } from "react-location-query";
import Page from "../../shared/Page";
import FilterPanel from "../../shared/FilterPanel";
import Products from "./Products";

const Search = () => {
	const [q, setQ] = useLocationField("q", {
		type: "string",
		initial: "",
		hideIfInitial: true
	});

	console.log(q);

	return (
		<Page alignment="horizontal" vAlign="top">
			<FilterPanel categoryId={3} needRender={false} />
			<Products />
		</Page>
	);
};

export default Search;
