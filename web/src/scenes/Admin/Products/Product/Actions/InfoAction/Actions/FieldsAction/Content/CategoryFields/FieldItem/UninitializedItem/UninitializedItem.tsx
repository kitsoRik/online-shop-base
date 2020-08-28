import React, { useState } from "react";
import {
	CategoryField,
	CategoryInfoField,
	useInitializeProductInfoFieldMutation
} from "../../../../../../../../../../../../generated/graphql";
import { List, Form, Input, Button } from "antd";
import classes from "./UninitializedItem.module.scss";
import { useLocationFieldT } from "react-location-query";

interface Props {
	categoryField?: Exclude<{ id: number; name: string }, CategoryField> | null;
	categoryInfoField: Exclude<
		{ id: number; name?: string | null },
		CategoryInfoField
	>;
}

const UninitializedItem = ({ categoryField, categoryInfoField }: Props) => {
	const [productInfoId] = useLocationFieldT<number>("info");
	const [value, setValue] = useState("");

	const [
		initializeProductInfoField
	] = useInitializeProductInfoFieldMutation();

	const onClickInitialize = async () => {
		try {
			const {} = await initializeProductInfoField({
				variables: {
					label: null,
					value,
					productInfoId,
					categoryInfoFieldId: categoryInfoField.id
				}
			});
		} catch (e) {
			console.log(e.message);
		}
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
									categoryField?.name
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
							<Button type="primary" onClick={onClickInitialize}>
								Initialize
							</Button>
						</div>
					}
				/>
			</List.Item>
		</>
	);
};

export default UninitializedItem;
