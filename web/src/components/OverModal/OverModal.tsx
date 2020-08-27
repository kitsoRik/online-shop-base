import React from "react";
import Over from "./Over/Over";

interface Props {
	children: React.ReactNode;

	visible?: boolean;
	component: JSX.Element;

	onClose: () => void;
}

const OverModal = ({
	visible = false,
	component,
	children,
	onClose
}: Props) => {
	const newComponent = React.cloneElement(component, {
		style: { zIndex: 10001 }
	});

	return (
		<>
			{newComponent}
			{visible && <Over onClose={onClose}>{children}</Over>}
		</>
	);
};

export default OverModal;
