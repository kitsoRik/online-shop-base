import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("category_fields")
export class CategoryFieldEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column()
	name: string;

	@Column()
	type: string;

	@Column()
	defaultValue: string;

	@Column({ name: "category_id", type: "int" })
	categoryId: number;

	@Column({ type: "boolean", default: false })
	removed: boolean;

	@Column({ type: "json", nullable: true })
	options: object;
}
