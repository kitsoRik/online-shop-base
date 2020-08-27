import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "../category.entity";
import { Repository } from "typeorm";
import { FilterEntity } from "./filter.entity";
import { FilterGroupEntity } from "./filter-group/filter-group.entity";
import { FilterGroupsInput } from "./filter-groups.input";

@Injectable()
export class FilterService {
	constructor(
		@InjectRepository(CategoryEntity)
		private categoryRepository: Repository<FilterEntity>,
		@InjectRepository(FilterEntity)
		private filterRepository: Repository<FilterEntity>,
		@InjectRepository(FilterGroupEntity)
		private filterGroupRepository: Repository<FilterGroupEntity>
	) {}

	async initializeFilter(categoryId: number) {
		const filter = this.filterRepository.create({ categoryId });

		await this.filterRepository.save(filter);

		return filter;
	}

	async getCategory(categoryId: number) {
		return await this.categoryRepository.findOne({
			where: { id: categoryId }
		});
	}

	async getGroups(filterId: number, filter?: FilterGroupsInput) {
		const query = this.filterGroupRepository.createQueryBuilder("groups");

		query.where("filter_id = :filterId", { filterId });

		if (filter) {
			if (filter.id !== undefined || filter.id !== null) {
				query.where("id = :id", { id: filter.id });
			}
		}

		return await query.getMany();
	}
}
