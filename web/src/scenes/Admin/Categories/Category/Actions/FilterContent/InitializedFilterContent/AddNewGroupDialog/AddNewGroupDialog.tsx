import React from "react";
import { Modal, notification } from "antd";
import { useAddCategoryFilterGroupMutation } from "../../../../../../../../generated/graphql";

interface Props {
	filterId: number;
	visible: boolean;
	onClose: () => void;
}

const AddNewGroupDialog = ({ filterId, visible, onClose }: Props) => {
	const [addCategoryFilter] = useAddCategoryFilterGroupMutation();

	const onAdd = async (name: string) => {
		try {
			const {} = await addCategoryFilter({
				variables: {
					name,
					filterId
				}
			});
		} catch (e) {
			console.log(e.message);
		}

		notification.success({ message: "Filter group has been added" });
		onClose();
	};

	return (
		<Modal
			visible={visible}
			onCancel={onClose}
			onOk={() => onAdd("Unnamed")}
		></Modal>
	);
};

export default AddNewGroupDialog;
