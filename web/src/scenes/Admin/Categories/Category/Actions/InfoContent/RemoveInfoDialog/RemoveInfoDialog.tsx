import React from "react";
import { Modal, notification } from "antd";
import { useLocationFieldT } from "react-location-query";
import { useRemoveCategoryInfoFromCategoryMutation } from "../../../../../../../generated/graphql";
import { useParams } from "react-router";

const RemoveInfoDialog = () => {
	const [removeInfo, setRemoveInfo] = useLocationFieldT<number>("removeInfo");
	const { id } = useParams();
	const categoryId = +id;

	const [removeCategoryInfo] = useRemoveCategoryInfoFromCategoryMutation();

	const onRemove = async () => {
		try {
			const {} = await removeCategoryInfo({
				variables: {
					categoryId: categoryId,
					infoId: removeInfo
				}
			});

			notification.success({ message: "Info has been removed" });
			setRemoveInfo(-1);
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<Modal
			visible={removeInfo !== -1}
			closable={false}
			onCancel={() => setRemoveInfo(-1)}
			onOk={onRemove}
			okText="Remove "
			title="Remove info?"
		></Modal>
	);
};

export default RemoveInfoDialog;
