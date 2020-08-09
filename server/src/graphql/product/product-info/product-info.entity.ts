import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn
} from "typeorm";
import { ProductFieldEntity } from "./product-field/product-field.entity";
import { ProductEntity } from "../product.entity";

@Entity({ name: "products_info" })
export class ProductInfoEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ default: "" })
	name: string;

	@Column({ name: "language" })
	language: string;

	@ManyToOne(
		type => ProductEntity,
		product => product.id
	)
	@JoinColumn({ name: "product_id" })
	product: ProductEntity;

	@Column({ name: "product_id", default: -1 })
	productId: number;

	@Column({
		name: "fields",
		default: JSON.stringify([]),
		type: "json"
	})
	fields: ProductFieldEntity[];
}
