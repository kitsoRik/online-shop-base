import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import {
	Injectable,
	BadRequestException,
	UnauthorizedException
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SessionEntity } from "./session/session.entity";
import { SessionService } from "./session/session.service";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>,
		private sessionService: SessionService
	) {}

	async createUser(
		email: string,
		password: string,
		firstName: string,
		lastName: string,
		middleName: string,
		phone: string
	) {
		const user = this.userRepository.create({
			email,
			password,
			firstName,
			lastName,
			middleName,
			phone
		});

		await this.userRepository.save(user);

		return user;
	}

	async joinUser(
		email: string,
		password: string
	): Promise<[UserEntity, SessionEntity]> {
		const user = await this.userRepository.findOne({ email, password });

		if (!user) {
			throw new BadRequestException({ type: "UNKNOWN_DATA" });
		}

		await this.userRepository.save(user);

		const session = await this.sessionService.createSession(user.id);

		return [user, session];
	}

	async authUser(sesid: string): Promise<UserEntity> {
		const session = await this.sessionService.getSessionBySessionId(sesid);

		if (!sesid) {
			throw new UnauthorizedException({ type: "SESSION_NOT_VALID" });
		}

		const user = await this.userRepository.findOne({ id: session.userId });

		await this.userRepository.save(user);

		return user;
	}
}
