import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "filter_fields" })
export class FilterFieldEntity {
	@Column({ type: "text", generated: "uuid", primary: true })
	id: string;

	@Column({ type: "text", name: "filter_group_id" })
	filterGroupId: string;

	@Column({ type: "text" })
	name: string;

	@Column({ type: "text", enum: ["unknown", "checkbox", "text"] })
	type: string;

	@Column({ type: "int", default: -1 })
	index: number;
}
