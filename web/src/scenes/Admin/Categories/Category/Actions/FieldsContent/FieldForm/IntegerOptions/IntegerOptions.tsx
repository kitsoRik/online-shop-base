import React from "react";
import FloatOptions from "../FloatOptions";

interface Props {
	intitialOptions: any;
}

const IntegerOptions = ({ intitialOptions }: Props) => {
	return <FloatOptions step={1} intitialOptions={intitialOptions} />;
};

export default IntegerOptions;
