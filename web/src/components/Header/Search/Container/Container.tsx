import React from "react";
import { Tabs, Typography } from "antd";
import classes from "./Container.module.scss";

const Container = () => {
	return (
		<div className={classes.container}>
			<Tabs tabPosition="left">
				<Tabs.TabPane
					tab={
						<Typography.Title level={4}>First tab</Typography.Title>
					}
				>
					123
				</Tabs.TabPane>
				<Tabs.TabPane
					tab={<Typography.Text>First tab</Typography.Text>}
				>
					123
				</Tabs.TabPane>
			</Tabs>
		</div>
	);
};

export default Container;
