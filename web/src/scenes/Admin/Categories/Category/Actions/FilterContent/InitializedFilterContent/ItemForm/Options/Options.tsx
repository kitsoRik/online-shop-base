import React from "react";
import Slider from "./Slider";
import Spin from "./Spin";
import Enum from "./Enum";

interface Props {
	fieldType: string;

	initialOptions?: object; // options
}

const Options = ({ fieldType, initialOptions }: Props) => {
	if (fieldType === "slider")
		return <Slider initialOptions={initialOptions} />;
	if (fieldType === "spin") return <Spin initialOptions={initialOptions} />;
	if (fieldType === "enum") return <Enum initialOptions={initialOptions} />;
	return <>{fieldType}</>;
};

export default Options;
