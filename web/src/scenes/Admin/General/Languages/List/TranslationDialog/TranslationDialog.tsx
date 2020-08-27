import React from "react";
import { Modal, Button, Upload, message } from "antd";
import { useLocationFieldT } from "react-location-query";
import { UploadOutlined } from "@ant-design/icons";
import { useSetLanguageJsonMutation } from "../../../../../../generated/graphql";
import {
	RcCustomRequestOptions,
	UploadChangeParam,
	UploadFile
} from "antd/lib/upload/interface";

const props = {
	name: "file",

	progress: {
		strokeColor: {
			"0%": "#108ee9",
			"100%": "#87d068"
		},
		strokeWidth: 3,
		format: (percent: any) => `${parseFloat(percent.toFixed(2))}%`
	}
};

const TranslationDialog = () => {
	const [translation, setTranslation] = useLocationFieldT<number>(
		"translation"
	);

	const [setLanguageJson] = useSetLanguageJsonMutation();

	const onSetLanguageJson = async (response: string) => {
		try {
			const {} = await setLanguageJson({
				variables: {
					id: translation,
					jsonName: response
				}
			});
		} catch (e) {}
	};

	return (
		<Modal visible={translation !== -1} onCancel={() => setTranslation(-1)}>
			<Upload
				{...props}
				onChange={(info: UploadChangeParam<UploadFile<any>>) => {
					if (info.file.status !== "uploading") {
						console.log(info.file, info.fileList);
					}
					if (info.file.status === "done") {
						onSetLanguageJson(info.file.response);
						message.success(
							`${info.file.name} file uploaded successfully`
						);
					} else if (info.file.status === "error") {
						message.error(`${info.file.name} file upload failed.`);
					}
				}}
				listType="text"
				method="POST"
				action={`http://localhost:3500/upload/languageJson`}
			>
				<Button>
					<UploadOutlined /> Click to Upload
				</Button>
			</Upload>
			,
		</Modal>
	);
};

export default TranslationDialog;
