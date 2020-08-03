import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../scenes/Home";
import Login from "../../scenes/Login";
import Register from "../../scenes/Register";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact component={Login} />
			<Route path="/register" exact component={Register} />
		</Switch>
	);
};

export default Routes;
