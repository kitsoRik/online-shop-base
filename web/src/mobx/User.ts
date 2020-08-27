import { observable, action } from "mobx";

export class User {
	@observable role: "user" | "admin" = "user";
	@observable adminView: boolean =
		localStorage.getItem("ADMIN_VIEW") === "true";
	@observable languageId: number = -1;

	@action setAdminView(view: boolean) {
		this.adminView = view;
		localStorage.setItem("ADMIN_VIEW", view ? "true" : "false");
	}
}
