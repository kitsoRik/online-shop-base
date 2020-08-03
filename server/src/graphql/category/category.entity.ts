import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "categories" })
export class CategoryEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ nullable: false, type: "text" })
	name: string;

	@Column({ name: "parent_id", nullable: true, type: "int" })
	parentId: number;
}
