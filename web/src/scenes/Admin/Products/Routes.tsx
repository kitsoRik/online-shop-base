import React from "react";
import { Switch, Route } from "react-router";
import Product from "./Product";
import Main from "./Main";
import Create from "./Create";

const Routes = () => {
	return (
		<Switch>
			<Route path="/admin/products" exact component={Main} />
			<Route path="/admin/products/create" exact component={Create} />
			<Route path="/admin/products/:id" exact component={Product} />
		</Switch>
	);
};

export default Routes;
