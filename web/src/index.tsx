import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo/apollo";
import { BrowserRouter } from "react-router-dom";
import { BrowserLocationQuery } from "react-location-query";
import { Provider as MobxProvider } from 'mobx-react';
import { user } from "./mobx";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<BrowserLocationQuery>
				<ApolloProvider client={client}>
					<MobxProvider
						user={user}
					>
						<App />
					</MobxProvider>
				</ApolloProvider>
			</BrowserLocationQuery>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
