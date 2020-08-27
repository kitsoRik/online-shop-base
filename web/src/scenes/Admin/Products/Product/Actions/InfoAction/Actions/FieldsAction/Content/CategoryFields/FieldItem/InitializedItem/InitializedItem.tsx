import React, { useState } from "react";
import {
	ProductInfoField,
	CategoryField,
	CategoryInfoField,
	useChangeCategoryFieldInProductInfoMutation
} from "../../../../../../../../../../../../generated/graphql";
import { List, Typography, Form, Input, Button, notification } from "antd";
import { useLocationFieldT } from "react-location-query";
import { useParams } from "react-router";
import classes from "./InitializedItem.module.scss";

interface Props {
	productInfoField: Exclude<
		{ id: number; name?: string | null; value?: string | null },
		ProductInfoField
	>;
	categoryField?: CategoryField;
	categoryInfoField: Exclude<
		{ id: number; name?: string | null },
		CategoryInfoField
	>;
}

const InitializedItem = ({
	productInfoField,
	categoryField,
	categoryInfoField
}: Props) => {
	const [value, setValue] = useState(productInfoField.value ?? "");

	const [changeCategoryField] = useChangeCategoryFieldInProductInfoMutation();

	const onChangeClick = async () => {
		try {
			const {} = await changeCategoryField({
				variables: {
					fieldId: productInfoField.id,
					value
				}
			});
		} catch (e) {
			console.log(e.message);
		}

		notification.success({ message: "Value has been changed" });
	};

	return (
		<>
			<List.Item actions={[]}>
				<List.Item.Meta
					description={
						<div className={classes.container}>
							<Form.Item
								className={classes.formItem}
								label={
									categoryInfoField.name ??
									`No named (category name is ${categoryField?.name})`
								}
								style={{ display: "flex" }}
							>
								<Input
									onChange={e => setValue(e.target.value)}
									defaultValue={value}
									placeholder={`Input value for '${
										categoryInfoField.name ??
										categoryField?.name
									}'`}
								/>
							</Form.Item>
							{value !== productInfoField.value && (
								<Button type="primary" onClick={onChangeClick}>
									Change
								</Button>
							)}
						</div>
					}
				/>
			</List.Item>
		</>
	);
};

export default InitializedItem;
