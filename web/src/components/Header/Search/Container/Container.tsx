import React from "react";
import { Tabs, Typography, Spin } from "antd";
import classes from "./Container.module.scss";
import { useSearchProductsContainerQuery } from "../../../../generated/graphql";
import { inject, observer } from "mobx-react";
import { User } from "../../../../mobx/User";
import { useTranslation } from "react-i18next";
import normalizeSearchProducts from "./utils/normalizeSearchProducts";

interface Props {
	searchText: string;
	user?: User;
}

const Container = ({ searchText, user }: Props) => {
	const { i18n } = useTranslation();

	const { data, loading } = useSearchProductsContainerQuery({
		variables: {
			nameTemplate: searchText,
			languageCode: i18n.language
		}
	});

	const normalized = normalizeSearchProducts(data);

	return (
		<div className={classes.container}>
			<Spin spinning={loading}>
				<Tabs tabPosition="left">
					{Object.keys(normalized).map(id => {
						const root = normalized[id as any];
						const subcategories = root.children;

						return (
							<>
								<Tabs.TabPane
									tab={
										<Typography.Title level={3}>
											{root.name}
										</Typography.Title>
									}
								>
									123
								</Tabs.TabPane>
								{Object.keys(subcategories).map(id => {
									const subsubcategories =
										subcategories[id as any].children;
									return (
										<>
											<Tabs.TabPane
												tab={
													<Typography.Title level={4}>
														{
															subcategories[
																id as any
															].name
														}
													</Typography.Title>
												}
											>
												123
											</Tabs.TabPane>
											{Object.keys(subsubcategories).map(
												id => (
													<Tabs.TabPane
														tab={
															<Typography.Text type="secondary">
																{
																	subsubcategories[
																		id as any
																	].name
																}
															</Typography.Text>
														}
													>
														123
													</Tabs.TabPane>
												)
											)}
										</>
									);
								})}
							</>
						);
					})}
				</Tabs>
			</Spin>
		</div>
	);
};

export default inject("user")(observer(Container));
