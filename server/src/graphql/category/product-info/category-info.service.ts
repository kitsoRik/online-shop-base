import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryInfoEntity } from "./category-info.entity";
import { Repository } from "typeorm";
import { GraphQLError } from "graphql";
import { ChangeCategoryInfoInput } from "./category-info.input";
import { CategoryService } from "../category.service";

@Injectable()
export class CategoryInfoService {
	constructor(
		@InjectRepository(CategoryInfoEntity)
		private categoryInfoRepository: Repository<CategoryInfoEntity>,
		private categoryService: CategoryService
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

		console.log(categoryInfo);

		await this.categoryInfoRepository.save(categoryInfo);

		return categoryInfo;
	}

	async changeField(id: number, fieldId: string, value: string) {
		const categoryInfo = await this.findById(id);

		const oldField = categoryInfo.fields.find(f => f.id === fieldId);

		if (!oldField) throw new Error("UNKNOWN_FIELD");

		oldField.value = value;

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

	async getFields(id: number) {
		const categoryInfo = await this.categoryInfoRepository.findOne({
			id
		});

		return categoryInfo.fields;
	}

	async getInfoByCategoryId(categoryId: number) {
		const categoryInfo = await this.categoryInfoRepository.find({
			where: { categoryId }
		});

		return categoryInfo;
	}

	async getInfoByCategoryIdAndInfoId(categoryId: number, infoId: number) {
		const categoryInfo = await this.categoryInfoRepository.find({
			where: { categoryId, languageId: infoId }
		});

		return categoryInfo;
	}
}
