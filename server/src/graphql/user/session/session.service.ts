import { Injectable } from "@nestjs/common";
import { SessionEntity } from "./session.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class SessionService {
	constructor(
		@InjectRepository(SessionEntity)
		private sessionRepository: Repository<SessionEntity>
	) {
		(global as any).services = {
			...(global as any).services,
			session: this
		};
	}

	async createSession(userId: number) {
		const session = await this.sessionRepository.create({ userId });

		await this.sessionRepository.save(session);

		return session;
	}

	async getSessionBySessionId(id: string) {
		return await this.sessionRepository.findOne({ id });
	}
}
