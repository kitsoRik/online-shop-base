import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "config" })
export class ConfigEntity {
	@PrimaryGeneratedColumn()
	id: number;
}
