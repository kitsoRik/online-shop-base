import React from "react";
import { Category } from "../../../../../generated/graphql";

interface Props {
	category: Category;
}

const Actions = ({ category }: Props) => {
	if (!category) return null;
	return <>{category.name}</>;
};

export default Actions;
