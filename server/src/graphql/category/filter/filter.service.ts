import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "../category.entity";
import { Repository } from "typeorm";

@Injectable()
export class FilterService {
	constructor(
		@InjectRepository(CategoryEntity)
		private categoryRepository: Repository<CategoryEntity>
	) {}

	async getCategory(categoryId: number) {
		return await this.categoryRepository.findOne({
			where: { id: categoryId }
		});
	}
}
