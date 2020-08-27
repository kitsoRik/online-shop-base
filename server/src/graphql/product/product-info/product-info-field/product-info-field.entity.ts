import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("product_info_fields")
export class ProductInfoFieldEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ name: "product_info_id", type: "int" })
	productInfoId: number;

	@Column({ name: "category_info_field_id", nullable: true })
	categoryInfoFieldId: number;

	@Column({ type: "text", nullable: true })
	name: string;

	@Column({ type: "text" })
	value: string;
}
