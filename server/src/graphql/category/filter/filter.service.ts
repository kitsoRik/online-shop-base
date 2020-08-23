import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "../category.entity";
import { Repository } from "typeorm";
import { FilterEntity } from "./filter.entity";

@Injectable()
export class FilterService {
	constructor(
		@InjectRepository(CategoryEntity)
		private categoryRepository: Repository<FilterEntity>,
		@InjectRepository(FilterEntity)
		private filterRepository: Repository<FilterEntity>
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
}
