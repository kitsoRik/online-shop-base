import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { CategoryFieldEntity } from "./category-field/category-field";

@Entity({ name: "categories" })
export class CategoryEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ nullable: true, type: "text" })
	name: string;

	@Column({ type: "int", default: 0, nullable: true }) // 0 - root, 1 - sub, 2 - subsub...
	level: number;

	@Column({ name: "parent_id", nullable: true, type: "int" })
	parentId: number;

	@Column({
		name: "fields",
		default: JSON.stringify([]),
		type: "json"
	})
	fields: CategoryFieldEntity[];
}
