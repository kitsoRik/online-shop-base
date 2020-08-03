import React from "react";
import { Switch, Route } from "react-router";

const Routes = () => {
	return (
		<Switch>
			<Route path="/admin/categories" />
			<Route path="/admin/smth" />
			<Route path="/admin/smb" />
		</Switch>
	);
};

export default Routes;
