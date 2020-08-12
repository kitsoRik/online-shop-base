import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn
} from "typeorm";
import { CategoryInfoFieldEntity } from "./category-info-field/category-info-field";
import { CategoryEntity } from "../category.entity";

@Entity({ name: "categories_info" })
export class CategoryInfoEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ default: "" })
	name: string;

	@Column({ name: "language_id", type: "int" })
	languageId: number;

	@ManyToOne(
		type => CategoryEntity,
		category => category.id
	)
	@JoinColumn({ name: "category_id" })
	category: CategoryEntity;

	@Column({ name: "category_id", default: -1 })
	categoryId: number;

	@Column({
		name: "fields",
		default: JSON.stringify([]),
		type: "json"
	})
	fields: CategoryInfoFieldEntity[];
}
