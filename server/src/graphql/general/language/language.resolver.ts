import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { LanguageType } from "./language.type";
import { LanguageService } from "./language.service";

@Resolver(of => LanguageType)
export class LanguageResolver {
	constructor(private languageService: LanguageService) {}

	@Mutation(type => LanguageType)
	addLanguage(@Args("name") name: string, @Args("code") code: string) {
		return this.languageService.addLanguage(name, code);
	}

	@Query(type => [LanguageType])
	languages() {
		return this.languageService.getlanguages();
	}
}
