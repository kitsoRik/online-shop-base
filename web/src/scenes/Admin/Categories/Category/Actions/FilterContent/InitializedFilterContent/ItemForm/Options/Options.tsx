import React from "react";
import Slider from "./Slider";

interface Props {
	fieldType: string;

	initialOptions?: object; // options
}

const Options = ({ fieldType, initialOptions }: Props) => {
	if (fieldType === "slider")
		return <Slider initialOptions={initialOptions} />;
	return <>{fieldType}</>;
};

export default Options;
