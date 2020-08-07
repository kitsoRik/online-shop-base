import React from "react";
import classes from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link className={classes.logo} to="/">
			<img
				className={classes.img}
				src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png"
			/>
		</Link>
	);
};

export default Logo;
