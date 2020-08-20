import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryInfoEntity } from "./category-info.entity";
import { Repository } from "typeorm";
import { GraphQLError } from "graphql";
import {
	ChangeCategoryInfoInput,
	CategoryInfoInput
} from "./category-info.input";
import { CategoryService } from "../category.service";
import { CategoryInfoFieldService } from "./category-info-field/category-info-field.service";
import { CategoryInfoFielddInput } from "./category-info-field/category-info-field.input";
import { CategoryInfoFieldEntity } from "./category-info-field/category-info-field.entity";

@Injectable()
export class CategoryInfoService {
	constructor(
		@InjectRepository(CategoryInfoEntity)
		private categoryInfoRepository: Repository<CategoryInfoEntity>,
		@InjectRepository(CategoryInfoFieldEntity)
		private categoryInfoFieldRepository: Repository<
			CategoryInfoFieldEntity
		>,
		private categoryService: CategoryService,
		private categoryInfoFieldService: CategoryInfoFieldService
	) {}

	async addCategoryInfo(categoryId: number, languageId: number) {
		const category = await this.categoryService.findById(categoryId);
		const hasCategoryInfo = await this.categoryInfoRepository.findOne({
			where: { categoryId, languageId }
		});
		if (hasCategoryInfo)
			throw new GraphQLError("ALREADY EXISTS THIS LANGUAGE");

		const categoryInfo = await this.categoryInfoRepository.create({
			category,
			languageId
		});

		await this.categoryInfoRepository.save(categoryInfo);

		return categoryInfo;
	}

	async removeCategoryInfo(categoryId: number, infoId: number) {
		const categoryInfo = await this.categoryInfoRepository.findOne({
			id: infoId
		});

		if (categoryInfo.categoryId !== categoryId)
			throw new GraphQLError("Bad link category id and info id");

		await this.categoryInfoRepository.remove(categoryInfo);
	}

	async changeCategoryInfo(id: number, change: ChangeCategoryInfoInput) {
		let categoryInfo = await this.categoryInfoRepository.findOne({
			id
		});

		if (!categoryInfo) {
			throw new GraphQLError("UNKNOWN_CATEGORY");
		}

		categoryInfo = { ...categoryInfo, ...change };

		await this.categoryInfoRepository.save(categoryInfo);

		return categoryInfo;
	}

	async findById(id: number) {
		const categoryInfo = await this.categoryInfoRepository.findOne({ id });
		return categoryInfo;
	}

	async findByNameTemplate(template: string) {
		const query = await this.categoryInfoRepository
			.createQueryBuilder("categories_info")
			.where("name LIKE :template", { template: `%${template}%` });
		const categories = await query.getMany();
		return categories;
	}

	async getFields(categoryInfoId: number, filter: CategoryInfoFielddInput) {
		const query = this.categoryInfoFieldRepository.createQueryBuilder();

		query.where("category_info_id = :categoryInfoId", { categoryInfoId });

		if (filter) {
			if (filter.id !== undefined) {
				query.andWhere("id = :id", { id: filter.id });
			}
		}

		return query.getMany();
	}

	async getInfoByCategoryId(categoryId: number) {
		const categoryInfo = await this.categoryInfoRepository.find({
			where: { categoryId }
		});

		return categoryInfo;
	}

	async getInfo(categoryId: number, filter?: CategoryInfoInput) {
		const query = this.categoryInfoRepository
			.createQueryBuilder("categories_info")
			.where("category_id = :categoryId", { categoryId });

		if (filter) {
			if (filter.id) {
				query.andWhere("id = :id", { id: filter.id });
			}
			if (filter.languageCode) {
				query.andWhere(
					"language_id IN (SELECT id FROM config_languages WHERE code = :languageCode)",
					{
						languageCode: filter.languageCode
					}
				);
			}
		}

		const categoryInfo = await query.getMany();

		return categoryInfo;
	}
}
