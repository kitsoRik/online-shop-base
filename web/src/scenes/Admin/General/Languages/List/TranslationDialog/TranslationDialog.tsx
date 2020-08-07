import React from "react";
import { Modal } from "antd";
import { useLocationFieldT } from "react-location-query";

const TranslationDialog = () => {
	const [translation, setTranslation] = useLocationFieldT<number>(
		"translation"
	);
	return (
		<Modal visible={translation !== -1} onCancel={() => setTranslation(-1)}>
			Aaa
		</Modal>
	);
};

export default TranslationDialog;
