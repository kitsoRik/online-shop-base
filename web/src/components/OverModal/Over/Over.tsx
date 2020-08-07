import React from "react";
import classes from "./Over.module.scss";

interface Props {
	children: React.ReactNode;
}

const Over = ({ children }: Props) => {
	return <div className={classes.over}>{children}</div>;
};

export default Over;
