import React from "react";
import Page from "../../../../shared/Page";
import Actions from "./Actions";

import classes from "./Product.module.scss";

const Product = () => {
	return (
		<Page>
			<div className={classes.edit}>
				<Actions />
			</div>
		</Page>
	);
};

export default Product;
