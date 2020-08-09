import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "languages" })
export class LanguageEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ nullable: false })
	name: string;

	@Column({ nullable: false })
	code: string;
}
