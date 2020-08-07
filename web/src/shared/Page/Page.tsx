import React from "react";
import classes from "./Page.module.scss";

interface Props {
	children: React.ReactNode;

	hAlign?: "left" | "center" | "right" | "stretch";
	vAlign?: "top" | "center" | "bottom" | "stretch";
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

const alignItemsFromHAlign = (
	hAlign: "left" | "center" | "right" | "stretch"
) => {
	switch (hAlign) {
		case "left":
			return "flex-start";
		case "center":
			return "center";
		case "right":
			return "flex-end";
		case "stretch":
			return "stretch";
		default:
			throw new Error(`Unknown hAlign, passed ${hAlign}`);
	}
};

const justifyContentFromVAlign = (
	hAlign: "top" | "center" | "bottom" | "stretch"
) => {
	switch (hAlign) {
		case "top":
			return "flex-start";
		case "center":
			return "center";
		case "bottom":
			return "flex-end";
		case "stretch":
			return "stretch";
		default:
			throw new Error(`Unknown vAlign, passed ${hAlign}`);
	}
};

export default Page;
