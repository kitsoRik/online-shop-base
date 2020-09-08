import React from "react";
import { List as ListD } from "antd";
import Item from "./Item";

interface Props {
	fields: {
		id: string;
		name: string;
	}[];
	values: {
		id: string;
		value: string;
		filterField: {
			id: string;
		};
	}[];

	onFieldInitialized: (filterFieldId: string, value: string) => void;
	onFieldChanged: (fieldId: string, value: string) => void;
}

const List = ({
	fields,
	values,
	onFieldChanged,
	onFieldInitialized
}: Props) => {
	return (
		<ListD>
			{fields.map(field => {
				const filterValue = values.find(
					v => v.filterField.id === field.id
				);
				return (
					<Item
						field={field}
						value={filterValue}
						onInitialize={value =>
							onFieldInitialized(field.id, value)
						}
						onValueChange={value =>
							onFieldChanged(filterValue!.id, value)
						}
					/>
				);
			})}
		</ListD>
	);
};

export default List;
