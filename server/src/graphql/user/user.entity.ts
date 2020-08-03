import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ unique: true })
	email: string;
}
