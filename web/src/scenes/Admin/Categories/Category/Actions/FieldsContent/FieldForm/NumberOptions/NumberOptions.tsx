import React from "react";
import IntegerOptions from "./IntegerOptions";
import FloatOptions from "./FloatOptions";

interface Props {
	intitialOptions?: any;
}

const NumberOptions = ({ intitialOptions }: Props) => {
	if (!intitialOptions.float)
		return <IntegerOptions intitialOptions={intitialOptions} />;
	return <FloatOptions intitialOptions={intitialOptions} />;
};

export default NumberOptions;
