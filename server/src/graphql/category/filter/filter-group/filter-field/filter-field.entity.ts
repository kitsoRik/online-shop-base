import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "filter_field_entity" })
export class FilterFieldEntity {
	@Column({ type: "text", generated: "uuid", primary: true })
	id: number;

	@Column({ type: "int", name: "filter_group_id" })
	filterGroupId: number;
}
