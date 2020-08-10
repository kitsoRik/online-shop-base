import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./defaults.less";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo/apollo";
import { BrowserRouter } from "react-router-dom";
import { BrowserLocationQuery } from "react-location-query";
import { Provider as MobxProvider } from "mobx-react";
import { user } from "./mobx";
import "./i18n/i18n";

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				<BrowserLocationQuery>
					<ApolloProvider client={client}>
						<MobxProvider user={user}>
							<App />
						</MobxProvider>
					</ApolloProvider>
				</BrowserLocationQuery>
			</BrowserRouter>
		</Suspense>
	</React.StrictMode>,
	document.getElementById("root")
);
