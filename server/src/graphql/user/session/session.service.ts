import { Injectable } from "@nestjs/common";
import { SessionEntity } from "./session.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class SessionService {
	constructor(
		@InjectRepository(SessionEntity)
		private sessionRepository: Repository<SessionEntity>
	) {}

	async createSession(userId: number) {
		const session = await this.sessionRepository.create({ userId });

		this.sessionRepository.save(session);

		return session;
	}

	async getSessionBySessionId(id: string) {
		return await this.sessionRepository.findOne({ id });
	}
}
