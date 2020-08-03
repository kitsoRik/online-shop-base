import React from "react";
import "./App.css";
import { useGetUserQuery } from "./generated/graphql";

function App() {
	const { data } = useGetUserQuery();

	const user = data?.user;

	return (
		<div className="App">
			<header className="App-header">
				{user?.id} {user?.email}
			</header>
		</div>
	);
}

export default App;
