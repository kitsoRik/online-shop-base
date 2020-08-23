import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterGroupEntity } from "./filter-group.entity";
import { Repository } from "typeorm";

@Injectable()
export class FilterGroupService {
	constructor(
		@InjectRepository(FilterGroupEntity)
		private filterGroupRepository: Repository<FilterGroupEntity>
	) {}

	async addFilterGroup(filterId: number, name: string) {
		const group = this.filterGroupRepository.create({ filterId, name });

		await this.filterGroupRepository.save(group);

		return group;
	}
}
