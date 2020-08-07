import React from "react";
import { Switch, Route } from "react-router";
import Information from "../Information";
import Languages from "../Languages";

const Routes = () => {
	return (
		<Switch>
			<Route path="/admin/general/information" component={Information} />
			<Route path="/admin/general/languages" component={Languages} />
		</Switch>
	);
};

export default Routes;
