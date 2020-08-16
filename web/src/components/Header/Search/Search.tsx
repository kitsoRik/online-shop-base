import React, { useState } from "react";
import SearchD from "antd/lib/input/Search";
import classes from "./Search.module.scss";
import OverModal from "../../OverModal";
import { useQueryPush } from "react-location-query";
import Container from "./Container";

const Search = () => {
	const [active, setActive] = useState(false);
	const [searchText, setSearchText] = useState("");

	const queryPush = useQueryPush();

	const onSearch = (value: string) => {
		queryPush("/search", { q: value });
		setActive(false);
	};

	return (
		<div className={classes.search}>
			<OverModal
				visible={active}
				component={
					<SearchD
						onClick={() => setActive(true)}
						size="large"
						onSearch={onSearch}
						onChange={e => setSearchText(e.target.value)}
					/>
				}
			>
				<Container searchText={searchText} />
			</OverModal>
		</div>
	);
};

export default Search;
