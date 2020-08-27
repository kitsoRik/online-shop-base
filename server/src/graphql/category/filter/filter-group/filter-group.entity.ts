import { PrimaryGeneratedColumn, Generated, Column, Entity } from "typeorm";

@Entity({ name: "filter_groups" })
export class FilterGroupEntity {
	@Column({ generated: "uuid", type: "text", primary: true })
	id: string;

	@Column()
	name: string;

	@Column({ name: "filter_id", type: "int" })
	filterId: number;

	@Column({ type: "int" })
	index: number;
}
