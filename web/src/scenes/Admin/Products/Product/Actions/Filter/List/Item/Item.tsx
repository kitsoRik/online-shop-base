import React from "react";
import { List } from "antd";

interface Props {
	field: {
		id: string;
	};
	value?: {
		id: string;
	};
}

const Item = ({ field, value }: Props) => {
	return (
		<List.Item>
			<>{field.id}</>
			<br />
			<>{value?.id}</>
		</List.Item>
	);
};

export default Item;
