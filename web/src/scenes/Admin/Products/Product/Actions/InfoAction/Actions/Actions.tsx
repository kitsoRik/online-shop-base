import React from "react";
import { Tabs } from "antd";
import EditAction from "./EditAction";
import FieldsAction from "./FieldsAction";
import { useLocationField, useLocationFieldT } from "react-location-query";
import { useGetProductInfoByProductIdQuery } from "../../../../../../../generated/graphql";
import AddInfoDialog from "./AddInfoDialog";
import RemoveInfoDialog from "./RemoveInfoDialog";
import LanguageActions from "../../../../../../../shared/LanguageActions";

const Actions = () => {
	const [productId] = useLocationFieldT<number>("product");
	const [action, setAction] = useLocationField("action", {
		type: "string",
		initial: "editing",
		enum: ["editing", "category", "fields"]
	});
	const [infoId, setInfoId] = useLocationField("info", {
		type: "number",
		initial: -1,
		hideIfInitial: true
	});

	const [, setAddInfo] = useLocationField("addInfo", {
		type: "boolean",
		initial: false,
		hideIfInitial: true
	});

	const [, setRemoveInfo] = useLocationField("removeInfo", {
		type: "number",
		initial: -1,
		hideIfInitial: true
	});

	const { data } = useGetProductInfoByProductIdQuery({
		variables: {
			id: productId
		}
	});

	const product = (data?.products ?? [null])[0];

	const info = product?.info ?? [];

	return (
		<>
			<LanguageActions
				languages={info
					.slice()
					.sort((a, b) => a.id - b.id)
					.map(i => i.language)}
				activeLanguage={infoId.toString()}
				onClickLanguage={tab => setInfoId(+tab)}
				onAdd={() => setAddInfo(true)}
				onRemove={key => setRemoveInfo(+key)}
				activeKey={action}
				onTabClick={setAction}
				tabs={[
					<Tabs.TabPane key="editing" tab="Editing">
						<EditAction />
					</Tabs.TabPane>,
					<Tabs.TabPane key="fields" tab="Fields">
						<FieldsAction />
					</Tabs.TabPane>
				]}
			/>

			<AddInfoDialog />
			<RemoveInfoDialog />
		</>
	);
};

export default Actions;
