import React from "react";
import { Tabs } from "antd";
import EditAction from "./EditAction";
import FieldsAction from "./FieldsAction";
import { useLocationField, useLocationFieldT } from "react-location-query";
import { useGetProductInfoByProductIdQuery } from "../../../../../../../generated/graphql";
import AddInfoDialog from "./AddInfoDialog";

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
	const [addInfo, setAddInfo] = useLocationField("addInfo", {
		type: "boolean",
		initial: false,
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
			<Tabs
				tabPosition="top"
				type="editable-card"
				onEdit={(arg1, action) => {
					if (action === "add") setAddInfo(true);
				}}
				activeKey={infoId.toString()}
				onTabClick={tab => setInfoId(+tab)}
			>
				{info
					.slice()
					.sort((a, b) => a.id - b.id)
					.map(currentInfo => (
						<Tabs.TabPane
							key={currentInfo.id}
							tab={<div>{currentInfo.language}</div>}
						>
							<Tabs
								activeKey={action}
								tabPosition={"left"}
								style={{ height: 220 }}
								onTabClick={action => {
									// if (tab === "category") {
									// 	return queryPush("/admin/categories/edit", { category: 1 });
									// }
									setAction(action);
								}}
							>
								<Tabs.TabPane key="editing" tab="Editing">
									<EditAction />
								</Tabs.TabPane>
								<Tabs.TabPane key="fields" tab="Fields">
									<FieldsAction />
								</Tabs.TabPane>
							</Tabs>
						</Tabs.TabPane>
					))}
			</Tabs>
			<AddInfoDialog />
		</>
	);
};

export default Actions;
