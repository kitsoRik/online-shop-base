import { Store } from "./Store";
import { User } from "./User";
import { client } from "../apollo/apollo";
import { CurrentUserDocument, CurrentUserQuery } from "../generated/graphql";
import languages from "../shared/InputLanguage/languages";

export const store = new Store();
export const user = new User();

client
	.subscribe({
		query: CurrentUserDocument
	})
	.subscribe(observer => {
		const { currentUser } = observer.data as CurrentUserQuery;
		if (currentUser) {
			user.role =
				currentUser.firstName === "Rostyslav" ? "admin" : "user";
		}
	});
