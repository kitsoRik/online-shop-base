import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "./category.entity";
import { Repository } from "typeorm";
import { GraphQLError } from "graphql";

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(CategoryEntity)
		private categoryRepository: Repository<CategoryEntity>
	) {}

	async createCategory(name: string, parentId?: number) {
		const category = await this.categoryRepository.create({
			name,
			parentId
		});

		await this.categoryRepository.save(category);

		return category;
	}

	async changeCategory(id: number, name: string) {
		const category = await this.categoryRepository.findOne({
			id
		});

		if (!category) {
			throw new GraphQLError("UNKNOWN_CATEGORY");
		}

		category.name = name;

		await this.categoryRepository.save(category);

		return category;
	}

	async getParent(parentId: number) {
		const category = await this.categoryRepository.findOne({
			id: parentId
		});
		return category;
	}

	async getChildren(id: number) {
		const category = await this.categoryRepository.find({
			parentId: id
		});
		return category;
	}

	async getCategories() {
		const categories = await this.categoryRepository.find();
		return categories;
	}

	async findByNameTemplate(template: string) {
		const query = await this.categoryRepository
			.createQueryBuilder("categories")
			.where("name LIKE :template", { template: `%${template}%` });
		const categories = await query.getMany();
		return categories;
	}

	async findById(id: number) {
		const category = await this.categoryRepository.findOne({ id });
		return category;
	}
}
