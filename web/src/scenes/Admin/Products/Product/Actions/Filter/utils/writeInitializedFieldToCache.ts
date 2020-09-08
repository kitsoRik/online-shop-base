import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
	InitializedFilterValueProductFragmentDoc,
	InitializedFilterValueProductFragment,
	FilterValueFieldsFragment
} from "../../../../../../../generated/graphql";

const writeInitializedFieldToCache = (
	client: ApolloClient<object>,
	field: FilterValueFieldsFragment,
	productId: number
) => {
	const data = client.readFragment<InitializedFilterValueProductFragment>({
		fragment: InitializedFilterValueProductFragmentDoc,
		id: `Product:${productId}`,
		fragmentName: "InitializedFilterValueProduct"
	});
	console.log(data);
	if (data) {
		client.writeFragment<InitializedFilterValueProductFragment>({
			fragment: InitializedFilterValueProductFragmentDoc,
			id: `Product:${productId}`,
			fragmentName: "InitializedFilterValueProduct",
			data: {
				...data,
				filterValues: [...data.filterValues, { ...field }]
			}
		});
	}
};

export default writeInitializedFieldToCache;
