import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../scenes/Home";
import Login from "../../scenes/Login";
import Register from "../../scenes/Register";
import Admin from "../../scenes/Admin";
import Search from "../../scenes/Search";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact component={Login} />
			<Route path="/register" exact component={Register} />
			<Route path="/admin" component={Admin} />
			<Route path="/search" component={Search} />
		</Switch>
	);
};

export default Routes;
