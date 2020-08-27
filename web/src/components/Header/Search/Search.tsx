import React, { useState } from "react";
import SearchD from "antd/lib/input/Search";
import classes from "./Search.module.scss";
import OverModal from "../../OverModal";
import { useQueryPush, useLocationField } from "react-location-query";
import Container from "./Container";
import { useLocation } from "react-router";

const Search = () => {
	const location = useLocation();
	const searchTextPath = location.pathname.startsWith("/search")
		? "q"
		: "search_text";

	const [active, setActive] = useLocationField("search", {
		skip: searchTextPath === "q",
		type: "boolean",
		initial: false,
		hideIfInitial: true
	});

	const [searchText, setSearchText] = useLocationField(searchTextPath, {
		skip: !active,
		type: "string",
		initial: "",
		hideIfInitial: true
	});

	const [] = useLocationField("search_selected_category", {
		skip: !active,
		type: "number",
		initial: -1,
		hideIfInitial: true
	});

	const queryPush = useQueryPush();

	const onSearch = (value: string) => {
		setActive(false);
		queryPush("/search", { q: value });
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
