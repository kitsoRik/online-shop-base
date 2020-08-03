import React from "react";
import classes from "./Page.module.scss";

interface Props {
	children: React.ReactNode;

	hAlign?: "left" | "center" | "right";
	vAlign?: "top" | "center" | "bottom";
}

const Page = ({ children, hAlign = "center", vAlign = "center" }: Props) => {
	return (
		<div
			className={classes.page}
			style={{
				alignItems: alignItemsFromHAlign(hAlign),
				justifyContent: justifyContentFromVAlign(vAlign)
			}}
		>
			{children}
		</div>
	);
};

const alignItemsFromHAlign = (hAlign: "left" | "center" | "right") => {
	switch (hAlign) {
		case "left":
			return "flex-start";
		case "center":
			return "center";
		case "right":
			return "flex-end";
		default:
			throw new Error(`Unknown hAlign, passed ${hAlign}`);
	}
};

const justifyContentFromVAlign = (hAlign: "top" | "center" | "bottom") => {
	switch (hAlign) {
		case "top":
			return "flex-start";
		case "center":
			return "center";
		case "bottom":
			return "flex-end";
		default:
			throw new Error(`Unknown vAlign, passed ${hAlign}`);
	}
};

export default Page;
