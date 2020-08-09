import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ProductFieldEntity } from "./product-info/product-field/product-field.entity";
import { ProductInfoEntity } from "./product-info/product-info.entity";

@Entity({ name: "products" })
export class ProductEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ name: "category_id", type: "int" })
	categoryId: number;

	@OneToMany(
		type => ProductInfoEntity,
		info => info.product
	)
	info: ProductInfoEntity[];
}
