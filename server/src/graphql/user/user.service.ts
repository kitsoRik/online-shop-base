import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>
	) {}

	async createUser(email: string) {
		const user = this.userRepository.create({
			email
		});

		await this.userRepository.save(user);

		return user;
	}
}
