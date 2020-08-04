import React from "react";
import { Category } from "../../../../../../generated/graphql";

interface Props {
	category: Category;
}

const EditContent = ({ category }: Props) => {
	return <>Editing {category.name} </>;
};

export default EditContent;
