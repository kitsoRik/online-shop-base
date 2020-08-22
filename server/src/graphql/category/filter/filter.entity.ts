import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class FilterEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ type: "int", name: "category_id" })
	categoryId: number;
}
