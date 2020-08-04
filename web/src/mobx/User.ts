import { observable } from "mobx";

export class User {
	@observable role: "user" | "admin" = "user";
}
