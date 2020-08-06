import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ProductFieldEntity } from "./product-info/product-field/product-field.entity";

@Entity({ name: "products" })
export class ProductEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ name: "category_id", type: "int" })
	categoryId: number;
}
