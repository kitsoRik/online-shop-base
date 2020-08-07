import React from "react";
import { List as ListD, Button } from "antd";
import { useGetLanguagesQuery } from "../../../../../generated/graphql";
import { useLocationField } from "react-location-query";
import TranslationDialog from "./TranslationDialog";

const List = () => {
	const [translation, setTranslation] = useLocationField("translation", {
		type: "number",
		initial: -1,
		hideIfInitial: true
	});
	const { data, loading } = useGetLanguagesQuery();

	const languages = data?.languages ?? [];

	return (
		<>
			<ListD
				bordered
				dataSource={languages}
				renderItem={language => (
					<ListD.Item
						actions={[
							<Button onClick={() => setTranslation(language.id)}>
								translation
							</Button>
						]}
					>
						{language.name}
					</ListD.Item>
				)}
			/>
			<TranslationDialog />
		</>
	);
};

export default List;
