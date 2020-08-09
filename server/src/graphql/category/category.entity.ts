import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { CategoryFieldEntity } from "./category-field/category-field";

@Entity({ name: "categories" })
export class CategoryEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ nullable: true, type: "text" })
	name: string;

	@Column({ name: "parent_id", nullable: true, type: "int" })
	parentId: number;

	@Column({
		name: "fields",
		default: JSON.stringify([]),
		type: "json"
	})
	fields: CategoryFieldEntity[];
}
