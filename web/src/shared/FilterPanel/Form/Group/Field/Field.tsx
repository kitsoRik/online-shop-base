import React from "react";
import { Form, Checkbox } from "antd";
import Text from "./Text";

interface Props {
	field: {
		id: string;
		type: string;
		categoryField?: {
			id: number;
			type: string;
			options?: object | null;
		} | null;
	};
}

const Field = ({ field }: Props) => {
	switch (field.type) {
		case "text":
			return <Text />;
		case "checkbox":
			return <Checkbox />;
	}

	return null;
};

export default Field;
