import React from "react";
import {
	CategoryField,
	CategoryInfoField} from "../../../../../../../../../../generated/graphql";
import InitializedItem from "./InitializedItem";
import UnInitializedItem from "./UnInitializedItem/UnInitializedItem";

interface Props {
	categoryField: Exclude<{ id: number; name: string }, CategoryField>;
	categoryInfoField?: Exclude<
		{ id: number; name: string },
		CategoryInfoField
	> | null;
}

const FieldItem = ({ categoryField, categoryInfoField }: Props) => {
	if(categoryInfoField)
		return <InitializedItem categoryField={categoryField} categoryInfoField={categoryInfoField}/>

	return <UnInitializedItem categoryField={categoryField}/>
};

export default FieldItem;
