import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "filter_field_entity" })
export class FilterFieldEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ type: "int", name: "filter_id" })
	filterId: number;
}
