import React from "react";
import { Switch, Route } from "react-router";
import Main from "./Main";
import Create from "./Create";
import Category from "./Category";

const Routes = () => {
	return (
		<Switch>
			<Route path="/admin/categories" exact component={Main} />
			<Route path="/admin/categories/create" exact component={Create} />
			<Route path="/admin/categories/:id" exact component={Category} />
		</Switch>
	);
};

export default Routes;
