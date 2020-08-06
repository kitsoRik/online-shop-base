import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductInfoEntity } from "./product-info.entity";
import { Repository } from "typeorm";
import { GraphQLError } from "graphql";
import { ChangeProductInfoInput } from "./product-info.input";

@Injectable()
export class ProductInfoService {
	constructor(
		@InjectRepository(ProductInfoEntity)
		private productInfoRepository: Repository<ProductInfoEntity>
	) {}

	async addProductInfo(productId: number, language: string) {
		const productInfo = await this.productInfoRepository.create({
			productId,
			language
		});

		await this.productInfoRepository.save(productInfo);

		return productInfo;
	}

	async changeProductInfo(id: number, change: ChangeProductInfoInput) {
		let productInfo = await this.productInfoRepository.findOne({
			id
		});

		if (!productInfo) {
			throw new GraphQLError("UNKNOWN_CATEGORY");
		}

		productInfo = { ...productInfo, ...change };

		console.log(productInfo);

		await this.productInfoRepository.save(productInfo);

		return productInfo;
	}

	async changeField(id: number, fieldId: string, value: string) {
		const productInfo = await this.findById(id);

		const oldField = productInfo.fields.find(f => f.id === fieldId);

		if (!oldField) throw new Error("UNKNOWN_FIELD");

		oldField.value = value;

		await this.productInfoRepository.save(productInfo);

		return productInfo;
	}

	async findById(id: number) {
		const productInfo = await this.productInfoRepository.findOne({ id });
		return productInfo;
	}

	async findByNameTemplate(template: string) {
		// const query = await this.productInfoRepository
		// 	.createQueryBuilder("productInfos")
		// 	.where("name LIKE :template", { template: `%${template}%` });
		// const productInfos = await query.getMany();
		// return productInfos;
	}

	async getFields(id: number) {
		const productInfo = await this.productInfoRepository.findOne({
			id
		});

		return productInfo.fields;
	}

	async getInfoByProductId(productId: number) {
		const productInfo = await this.productInfoRepository.find({
			where: { productId }
		});

		return productInfo;
	}

	async getInfoByProductIdAndInfoId(productId: number, infoId: number) {
		const productInfo = await this.productInfoRepository.find({
			where: { productId, id: infoId }
		});

		return productInfo;
	}
}
