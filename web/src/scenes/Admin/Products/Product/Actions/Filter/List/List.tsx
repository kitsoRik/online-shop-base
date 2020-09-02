import React from "react";
import { List as ListD } from "antd";
import Item from "./Item";

interface Props {
	fields: {
		id: string;
	}[];
	values: {
		id: string;
		filterField: {
			id: string;
		};
	}[];
}

const List = ({ fields, values }: Props) => {
	return (
		<ListD>
			{fields.map(field => (
				<Item
					field={field}
					value={values.find(v => v.filterField.id === field.id)}
				/>
			))}
		</ListD>
	);
};

export default List;
