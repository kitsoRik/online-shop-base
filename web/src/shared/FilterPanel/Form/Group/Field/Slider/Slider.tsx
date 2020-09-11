import React from "react";
import { Slider as SliderD, Form, Typography } from "antd";

interface Props {
	options: any;

	value?: [number, number];
	onChange?: (value: any) => void;
}

const Slider = ({
	options: { min = 1, max = 100, isFloat = false },
	value = [min, max],
	onChange
}: Props) => {
	return (
		<SliderD
			min={min}
			max={max}
			step={isFloat ? 0.01 : 1}
			range
			value={value}
			onChange={onChange}
		/>
	);
};

export default Slider;
