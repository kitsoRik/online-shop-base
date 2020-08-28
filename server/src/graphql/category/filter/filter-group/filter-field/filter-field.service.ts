import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "../../../category.entity";
import { Repository } from "typeorm";
import { FilterFieldEntity } from "./filter-field.entity";
import { GraphQLError } from "graphql";

@Injectable()
export class FilterFieldService {
	constructor(
		@InjectRepository(FilterFieldEntity)
		private filterFieldRepository: Repository<FilterFieldEntity>
	) {}

	async addFieldToFilterGroup(filterGroupId: string, name: string) {
		const field = this.filterFieldRepository.create({
			filterGroupId,
			name
		});

		await this.filterFieldRepository.save(field);

		return field;
	}

	async changeField(id: string, name: string, type: string) {
		const field = await this.filterFieldRepository.findOne({
			where: { id }
		});

		if (!field) throw new GraphQLError("UNKNOWN_FIELD");

		field.name = name;
		field.type = type;

		await this.filterFieldRepository.save(field);

		return field;
	}
}
