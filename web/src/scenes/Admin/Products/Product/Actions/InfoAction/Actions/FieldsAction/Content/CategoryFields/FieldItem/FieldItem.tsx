import React from "react";
import {
	ProductInfoField,
	CategoryField,
	CategoryInfoField
} from "../../../../../../../../../../../generated/graphql";
import InitializedItem from "./InitializedItem";
import UninitializedItem from "./UninitializedItem";

interface Props {
	productField?: Exclude<
		{ id: number; name?: string | null; value?: string | null },
		ProductInfoField
	>;
	categoryField?: CategoryField;
	categoryInfoField: Exclude<
		{ id: number; name?: string | null },
		CategoryInfoField
	>;
}

const FieldItem = ({
	productField,
	categoryField,
	categoryInfoField
}: Props) => {
	if (productField)
		return (
			<InitializedItem
				productInfoField={productField}
				categoryInfoField={categoryInfoField}
				categoryField={categoryField}
			/>
		);

	return (
		<UninitializedItem
			categoryInfoField={categoryInfoField}
			categoryField={categoryField}
		/>
	);
};

export default FieldItem;
