import React from "react";
import NumberOptions from "../NumberOptions";

interface Props {
	intitialOptions?: object;
	fieldType: string;
}

const Options = ({ fieldType, intitialOptions }: Props) => {
	console.log(fieldType);
	if (fieldType === "number")
		return <NumberOptions intitialOptions={intitialOptions} />;

	return null;
};

export default Options;
