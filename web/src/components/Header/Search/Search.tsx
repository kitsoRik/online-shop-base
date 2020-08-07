import React, { useState } from "react";
import SearchD from "antd/lib/input/Search";
import classes from "./Search.module.scss";
import OverModal from "../../OverModal";
import { useQueryPush } from "react-location-query";

const Search = () => {
	const [active, setActive] = useState(false);

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
						onBlur={() => setActive(false)}
						size="large"
						onSearch={onSearch}
					/>
				}
			>
				<div>123</div>
			</OverModal>
		</div>
	);
};

export default Search;
