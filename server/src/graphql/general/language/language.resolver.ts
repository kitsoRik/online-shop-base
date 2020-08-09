import { Resolver, Mutation, Args, Query, Int } from "@nestjs/graphql";
import { LanguageType } from "./language.type";
import { LanguageService } from "src/config/language/language.service";

@Resolver(of => LanguageType)
export class LanguageResolver {
	constructor(private languageService: LanguageService) {}

	@Mutation(type => LanguageType)
	addLanguage(@Args("code") code: string) {
		return this.languageService.addLanguage(code);
	}

	@Mutation(type => Boolean)
	async setLanguageJson(
		@Args("id", { type: () => Int }) id: number,
		@Args("jsonName") jsonName: string
	) {
		await this.languageService.setLanguageJson(id, jsonName);
		return true;
	}

	@Query(type => [LanguageType])
	languages() {
		return this.languageService.getlanguages();
	}
}
