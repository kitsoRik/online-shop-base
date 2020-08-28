import React from "react";
import {
	FilterGroup,
	useAddFieldToFilterGroupMutation,
	GetCategoryFilterDocument
} from "../../../../../../../../../../generated/graphql";
import { Typography, Button } from "antd";
import classes from "./Header.module.scss";
import { getOperationName } from "@apollo/client/utilities";

interface Props {
	filterGroup: Exclude<{ id: string; name: string }, FilterGroup>;
	onEdit: () => void;
	onAddField: (filterGroupId: string) => void;
}

const Header = ({ filterGroup, onEdit, onAddField }: Props) => {
	return (
		<div className={classes.header}>
			<Typography.Text>{filterGroup.name}</Typography.Text>
			<Button onClick={onEdit}>Edit</Button>
			<Button onClick={() => onAddField(filterGroup.id)}>
				Add new field
			</Button>
		</div>
	);
};
export default Header;
