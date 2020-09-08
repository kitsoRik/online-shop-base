import React, { useState, useEffect } from "react";
import { List, Button, Input } from "antd";

interface Props {
	field: {
		id: string;
		name: string;
	};
	value?: {
		id: string;
		value: string;
	};

	onInitialize: (value: string) => void;
	onValueChange: (value: string) => void;
}

const Item = ({ field, value, onInitialize, onValueChange }: Props) => {
	const [newValue, setNewValue] = useState(value?.value ?? "");

	useEffect(() => {
		console.log(value?.value);
		if (value) setNewValue(value.value);
	}, [value?.value]);

	const onActionClick = () => {
		if (!!value) onValueChange(newValue);
		else onInitialize(newValue);
	};

	return (
		<List.Item>
			<>{field.name}</>
			<Input
				value={newValue}
				onChange={e => setNewValue(e.target.value)}
			/>
			<Button
				onClick={onActionClick}
				disabled={newValue === value?.value ?? ""}
				type="primary"
			>
				{!!value ? "Change" : "Initialize"}
			</Button>
		</List.Item>
	);
};

export default Item;
