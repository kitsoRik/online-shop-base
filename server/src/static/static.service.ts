import { Injectable, NotFoundException } from "@nestjs/common";
import { resolve } from "path";
import { LanguageService } from "src/config/language/language.service";

@Injectable()
export class StaticService {
	constructor(private languageService: LanguageService) {}

	async translationPathByLanguageId(lng: string) {
		const language = await this.languageService.getLanguageByCode(lng);

		if (!language) {
			throw new NotFoundException("LANGUAGE_CODE_NOT_FOUND");
		}

		if (!language.jsonName) {
			throw new NotFoundException("LANGUAGE_NOT_CONFIGURED");
		}

		return resolve(
			__dirname,
			"../../upload/translations",
			language.jsonName
		);
	}
}
