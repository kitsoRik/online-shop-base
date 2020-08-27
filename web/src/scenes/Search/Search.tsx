import React from "react";
import { useLocationField } from "react-location-query";

const Search = () => {
	const [q, setQ] = useLocationField("q", {
		type: "string",
		initial: "",
		hideIfInitial: true
	});

	console.log(q);

	return <>{q}</>;
};

export default Search;
