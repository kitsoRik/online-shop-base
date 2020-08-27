import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfigEntity } from "./config.entity";
import { Repository } from "typeorm";

@Injectable()
export class ConfigService {
	constructor(
		@InjectRepository(ConfigEntity)
		private configRepository: Repository<ConfigEntity>
	) {}

	setLanguageJson(code: string, jsonName: string) {}
}
