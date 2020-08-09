import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LanguageEntity } from "./language.entity";
import { Repository } from "typeorm";

@Injectable()
export class LanguageService {
	constructor(
		@InjectRepository(LanguageEntity)
		private languageRepository: Repository<LanguageEntity>
	) {}

	async addLanguage(name: string, code: string) {
		const language = await this.languageRepository.create({ name, code });

		await this.languageRepository.save(language);

		return language;
	}

	async getlanguages() {
		const languages = await this.languageRepository.find();

		return languages;
	}
}
