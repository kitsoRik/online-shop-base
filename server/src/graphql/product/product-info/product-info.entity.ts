import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ProductFieldEntity } from "./product-field/product-field.entity";

@Entity({ name: "products_info" })
export class ProductInfoEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ default: "" })
	name: string;

	@Column({ name: "language" })
	language: string;

	@Column({ name: "product_id" })
	productId: number;

	@Column({
		name: "fields",
		default: JSON.stringify([]),
		type: "json"
	})
	fields: ProductFieldEntity[];
}
