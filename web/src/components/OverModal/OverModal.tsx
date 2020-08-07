import React from "react";
import Over from "./Over/Over";

interface Props {
	children: React.ReactNode;

	visible?: boolean;
	component: JSX.Element;
}

const OverModal = ({ visible = false, component, children }: Props) => {
	const newComponent = React.cloneElement(component, {
		style: { zIndex: 10001 }
	});

	return (
		<>
			{newComponent}
			{visible && <Over>{children}</Over>}
		</>
	);
};

export default OverModal;
