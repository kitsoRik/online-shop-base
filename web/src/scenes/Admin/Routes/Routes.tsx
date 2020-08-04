import React from "react";
import { Switch, Route } from "react-router";
import Categories from "../Categories";

const Routes = () => {
	return (
		<Switch>
			<Route path="/admin/categories" component={Categories} />
			<Route path="/admin/smth" />
			<Route path="/admin/smb" />
		</Switch>
	);
};

export default Routes;
