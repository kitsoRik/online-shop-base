import React from "react";
import { Tabs, Typography } from "antd";
import { Category } from "../../../../../generated/graphql";
import normalizeSearchProductsCategory from "./utils/normalizeSearchProductsCategory";
import { useLocationFieldT } from "react-location-query";

interface Props {
	categories: Exclude<
		{
			id: number;
			name: string;
			parent?: {
				id: number;
				name: string;
				parent?: {
					id: number;
					name: string;
				} | null;
			} | null;
		},
		Category
	>[];

	content: JSX.Element;
}

const Categories = ({ categories, content }: Props) => {
	const [
		searchSelectedCategory,
		setSearchSelectedCategory
	] = useLocationFieldT<number>("search_selected_category");

	const normalized = normalizeSearchProductsCategory(categories);

	return (
		<>
			<Tabs
				tabPosition="left"
				activeKey={searchSelectedCategory.toString()}
				onTabClick={tab => setSearchSelectedCategory(+tab)}
			>
				{Object.keys(normalized).map(id => {
					const root = normalized[id as any];
					const subcategories = root.children;

					return (
						<>
							<Tabs.TabPane
								key={id}
								tab={
									<Typography.Title level={3}>
										{root.name}
									</Typography.Title>
								}
							>
								{content}
							</Tabs.TabPane>
							{Object.keys(subcategories).map(id => {
								const subsubcategories =
									subcategories[id as any].children;
								return (
									<>
										<Tabs.TabPane
											key={id}
											tab={
												<Typography.Title level={4}>
													{
														subcategories[id as any]
															.name
													}
												</Typography.Title>
											}
										>
											{content}
										</Tabs.TabPane>
										{Object.keys(subsubcategories).map(
											id => (
												<Tabs.TabPane
													key={id}
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
													{content}
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
		</>
	);
};

export default Categories;
