import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity("filters_values")
export class FilterValueEntity {
	@Column({ generated: "uuid", type: "text", primary: true })
	id: string;

	@Column({ type: "int", name: "product_id" })
	productId: number;

	@Column({ name: "filter_field_id" })
	filterFieldId: string;

	@Column()
	value: string;
}
