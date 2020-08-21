import React, { useState } from "react";
import SearchD from "antd/lib/input/Search";
import classes from "./Search.module.scss";
import OverModal from "../../OverModal";
import { useQueryPush, useLocationField } from "react-location-query";
import Container from "./Container";

const Search = () => {
	const [active, setActive] = useLocationField("search", {
		type: "boolean",
		initial: false,
		hideIfInitial: true
	});

	const [searchText, setSearchText] = useLocationField("search_text", {
		type: "string",
		initial: "",
		hideIfInitial: true
	});
	const [] = useLocationField("search_selected_category", {
		type: "number",
		initial: -1,
		hideIfInitial: true
	});

	const queryPush = useQueryPush();

	const onSearch = (value: string) => {
		queryPush("/search", { q: value });
		setActive(false);
	};
	return (
		<div className={classes.search}>
			<OverModal
				onClose={() => setActive(false)}
				visible={active}
				component={
					<SearchD
						onClick={() => setActive(true)}
						size="large"
						value={searchText}
						onSearch={onSearch}
						onChange={e => setSearchText(e.target.value)}
					/>
				}
			>
				<Container />
			</OverModal>
		</div>
	);
};

export default Search;
