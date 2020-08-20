import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "category_info_fields" })
export class CategoryInfoFieldEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: string;

	@Column({ name: "category_field_id", type: "int", nullable: true })
	categoryFieldId: number;

	@Column({ name: "category_info_id", type: "int" })
	categoryInfoId: number;

	@Column({ nullable: true })
	name: string;

	@Column({ nullable: true })
	value: string;
}
