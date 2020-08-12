import React from "react";
import { Tabs } from "antd";
import EditAction from "./EditAction";
import FieldsAction from "./FieldsAction";
import { useLocationField, useLocationFieldT } from "react-location-query";
import { useGetCategoryInfoByCategoryIdQuery } from "../../../../../../generated/graphql";
import AddInfoDialog from "./AddInfoDialog";
import RemoveInfoDialog from "./RemoveInfoDialog";
import LanguageActions from "../../../../../../shared/LanguageActions";

const InfoContent = () => {
	const [categoryId] = useLocationFieldT<number>("category");
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

	const { data } = useGetCategoryInfoByCategoryIdQuery({
		variables: {
			id: categoryId
		}
	});

	const category = (data?.categories ?? [null])[0];

	const info = category?.info ?? [];

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

export default InfoContent;
