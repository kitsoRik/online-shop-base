import React from "react";
import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Routes from "./components/Routes";

import classes from "./App.module.scss";
import Drawer from "./components/Drawer";
import Cover from "./components/Cover";

function App() {
	return (
		<>
			<Layout className={classes.layout}>
				<Header />
				<Content>
					<Routes />
				</Content>
				<Footer />
				<Drawer />
			</Layout>
			<Cover />
		</>
	);
}

export default App;
