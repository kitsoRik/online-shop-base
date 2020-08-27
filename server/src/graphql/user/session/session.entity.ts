import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "sessions" })
export class SessionEntity {
	@PrimaryGeneratedColumn("uuid", { name: "id" })
	id: string;

	@Column({ name: "user_id" })
	userId: number;
}
