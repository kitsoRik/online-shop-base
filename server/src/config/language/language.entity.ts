import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "config_languages" })
export class LanguageEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	code: string;

	@Column({ name: "json_name", nullable: true })
	jsonName: string;
}
