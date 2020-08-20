import React from "react";
import { Tabs } from "antd";

interface Props {
	languages: { id: number; code: string }[];
	activeLanguage: any;
	onClickLanguage: (languageId: number) => void;

	onAdd: () => void;
	onRemove: (key: string) => void;

	activeKey: string;
	onTabClick: (key: string) => void;

	tabs: any[];
}

const LanguageActions = ({
	languages,
	activeLanguage,
	onClickLanguage,
	onAdd,
	onRemove,
	activeKey,
	tabs,
	onTabClick
}: Props) => {
	return (
		<>
			<Tabs
				tabPosition="top"
				type="editable-card"
				onEdit={(key, action) => {
					if (action === "add") onAdd();
					if (action === "remove")
						onRemove(typeof key === "string" ? key : "");
				}}
				activeKey={activeLanguage}
				onTabClick={k => onClickLanguage(+k)}
			>
				{languages.map(language => (
					<Tabs.TabPane
						key={language.id}
						tab={<div>{language.code}</div>}
					>
						<Tabs
							activeKey={activeKey}
							tabPosition={"left"}
							onTabClick={onTabClick}
						>
							{tabs}
						</Tabs>
					</Tabs.TabPane>
				))}
			</Tabs>
		</>
	);
};

export default LanguageActions;
