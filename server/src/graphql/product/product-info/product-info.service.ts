import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductInfoEntity } from "./product-info.entity";
import { Repository } from "typeorm";
import { GraphQLError } from "graphql";
import { ChangeProductInfoInput } from "./product-info.input";
import { ProductService } from "../product.service";

@Injectable()
export class ProductInfoService {
	constructor(
		@InjectRepository(ProductInfoEntity)
		private productInfoRepository: Repository<ProductInfoEntity>,
		private productService: ProductService
	) {}

	async addProductInfo(productId: number, languageId: number) {
		const product = await this.productService.findById(productId);
		const hasProductInfo = await this.productInfoRepository.findOne({
			where: { productId, languageId }
		});
		if (hasProductInfo)
			throw new GraphQLError("ALREADY EXISTS THIS LANGUAGE");

		const productInfo = await this.productInfoRepository.create({
			product,
			languageId
		});

		await this.productInfoRepository.save(productInfo);

		return productInfo;
	}

	async removeProductInfo(productId: number, infoId: number) {
		const productInfo = await this.productInfoRepository.findOne({
			id: infoId
		});

		if (productInfo.productId !== productId)
			throw new GraphQLError("Bad link product id and info id");

		await this.productInfoRepository.remove(productInfo);
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
		const query = await this.productInfoRepository
			.createQueryBuilder("products_info")
			.where("name LIKE :template", { template: `%${template}%` });
		const products = await query.getMany();
		return products;
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

	async getInfoByProductIdAndLanguageId(productId: number, infoId: number) {
		const productInfo = await this.productInfoRepository.find({
			where: { productId, languageId: infoId }
		});

		return productInfo;
	}
}
