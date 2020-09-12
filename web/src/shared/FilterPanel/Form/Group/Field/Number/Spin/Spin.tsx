import React from "react";
import { Slider as SliderD, Spin as SpinD, InputNumber } from "antd";

interface Props {
	options: any;

	value?: [number, number];
	onChange?: (value: [number, number]) => void;
}

const Spin = ({
	options: { min = 1, max = 100, isFloat = false },
	value = [min, max],
	onChange
}: Props) => {
	return (
		<>
			<InputNumber
				min={min}
				max={max}
				step={isFloat ? 0.01 : 1}
				value={value[0]}
				onChange={v => {
					if (onChange) onChange([v as number, value[1]]);
				}}
			/>
			<InputNumber
				min={min}
				max={max}
				step={isFloat ? 0.01 : 1}
				value={value[1]}
				onChange={v => {
					if (onChange) onChange([value[0], v as number]);
				}}
			/>
		</>
	);
};

export default Spin;
