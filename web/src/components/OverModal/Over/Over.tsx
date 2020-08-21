import React from "react";
import classes from "./Over.module.scss";

interface Props {
	children: React.ReactNode;
	onClose: () => void;
}

const Over = ({ children, onClose }: Props) => {
	const ref = React.useRef<HTMLDivElement | null>(null);

	const onCloseClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === ref.current) onClose();
	};

	return (
		<div ref={ref} className={classes.over} onClick={onCloseClick}>
			{children}
		</div>
	);
};

export default Over;
