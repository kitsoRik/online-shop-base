import React from "react";
import classes from "./Page.module.scss";

interface Props {
	children: React.ReactNode;

	hAlign?: "left" | "center" | "right" | "stretch";
	vAlign?: "top" | "center" | "bottom" | "stretch";

	alignment?: "vertical" | "horizontal";
}

const Page = ({
	children,
	hAlign = "center",
	vAlign = "center",
	alignment = "vertical"
}: Props) => {
	const alignItems =
		alignment === "vertical"
			? alignItemsFromHAlign(hAlign)
			: justifyContentFromVAlign(vAlign);
	const justifyContent =
		alignment === "horizontal"
			? alignItemsFromHAlign(hAlign)
			: justifyContentFromVAlign(vAlign);

	const flexDirection = flexDirectionFromAlignment(alignment);

	return (
		<div
			className={classes.page}
			style={{
				alignItems,
				justifyContent,
				flexDirection
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

const flexDirectionFromAlignment = (alignment: "vertical" | "horizontal") => {
	return alignment === "vertical" ? "column" : "row";
};

export default Page;
