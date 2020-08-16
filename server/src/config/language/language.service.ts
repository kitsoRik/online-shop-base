import { Injectable } from "@nestjs/common";
import { LanguageEntity } from "./language.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { GraphQLError } from "graphql";

@Injectable()
export class LanguageService {
	constructor(
		@InjectRepository(LanguageEntity)
		private languageRepository: Repository<LanguageEntity>
	) {}

	async addLanguage(code: string) {
		const language = await this.languageRepository.create({ code });

		await this.languageRepository.save(language);

		return language;
	}

	async setLanguageJson(id: number, jsonName: string) {

		const language = await this.languageRepository.findOne({
			where: { id }
		});

		if (!language) throw new GraphQLError("UNKNOWN_INFO_ID");

		language.jsonName = jsonName;

		await this.languageRepository.save(language);
	}

	async getlanguages() {
		const languages = await this.languageRepository.find();

		return languages;
	}

	async getLanguageById(id: number) {
		return await this.languageRepository.findOne({ id });
	}

	async getLanguageByCode(code: string) {
		return await this.languageRepository.findOne({ where: { code } });
	}
}
