import React from "react";
import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Routes from "./components/Routes";

function App() {
	return (
		<Layout>
			<Header />
			<Content>
				<Routes />
			</Content>
			<Footer />
		</Layout>
	);
}

export default App;
