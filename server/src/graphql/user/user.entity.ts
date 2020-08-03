import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { UserRoleEnum } from "./user-role.enum";

@Entity({ name: "users" })
export class UserEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Column({ name: "first_name", nullable: false })
	firstName: string;

	@Column({ name: "last_name", nullable: false })
	lastName: string;

	@Column({ name: "middle_name", nullable: false, default: "" })
	middleName: string;

	@Column({ nullable: false, default: "" })
	phone: string;

	@Column({
		type: "text",
		enum: Object.values(UserRoleEnum),
		nullable: false,
		default: UserRoleEnum.User
	})
	role: string;
}
