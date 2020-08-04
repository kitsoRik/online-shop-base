import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { CategoryFieldType } from "./category-field/category-field.type";
import { CategoryFieldEntity } from "./category-field/category-field.entity";

@Entity({ name: "categories" })
export class CategoryEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ nullable: false, type: "text" })
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
