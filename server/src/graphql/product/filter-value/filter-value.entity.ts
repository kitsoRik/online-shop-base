import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("filters_values")
export class FilterValueEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ type: "int", name: "product_id" })
	productId: number;

	@Column({ name: "filter_field_id" })
	filterFieldId: string;

	@Column()
	value: string;
}
