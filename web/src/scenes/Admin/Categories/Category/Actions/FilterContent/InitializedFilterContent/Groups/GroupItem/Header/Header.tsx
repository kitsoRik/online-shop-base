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
}

const Header = ({ filterGroup }: Props) => {
	const [addFieldToFilterGroup] = useAddFieldToFilterGroupMutation();

	const onAddField = async () => {
		try {
			const {} = addFieldToFilterGroup({
				variables: {
					name: "GroupItem1",
					filterGroupId: filterGroup.id
				},
				refetchQueries: [getOperationName(GetCategoryFilterDocument)!]
			});
		} catch (e) {
			console.log(e.message);
		}
	};
	return (
		<div className={classes.header}>
			<Typography.Text>{filterGroup.name}</Typography.Text>
			<Button onClick={onAddField}>Add new field</Button>
		</div>
	);
};
export default Header;
