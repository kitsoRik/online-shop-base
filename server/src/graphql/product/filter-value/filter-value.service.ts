import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterValueEntity } from "./filter-value.entity";
import { Repository } from "typeorm";
import { ProductEntity } from "../product.entity";
import { FilterFieldEntity } from "src/graphql/category/filter/filter-group/filter-field/filter-field.entity";
import { GraphQLError } from "graphql";

@Injectable()
export class FilterValueService {
	constructor(
		@InjectRepository(FilterValueEntity)
		private filterValueRepository: Repository<FilterValueEntity>,
		@InjectRepository(ProductEntity)
		private productRepository: Repository<ProductEntity>,
		@InjectRepository(FilterFieldEntity)
		private filterFieldRepository: Repository<FilterFieldEntity>
	) {}

	async initializeFilterValue(
		value: string,
		productId: number,
		filterFieldId: string
	) {
		const filterValue = this.filterValueRepository.create({
			value,
			productId,
			filterFieldId
		});

		await this.filterValueRepository.save(filterValue);

		return filterValue;
	}

	async changeFilterValue(value: string, filterValueId: string) {
		const filterValue = await this.filterValueRepository.findOne({
			where: { id: filterValueId }
		});

		if (!filterValue) throw new GraphQLError("NOT_FOUND");

		filterValue.value = value;

		await this.filterValueRepository.save(filterValue);

		return filterValue;
	}

	async getProduct(productId: number): Promise<ProductEntity> {
		return await this.productRepository.findOne({
			where: { id: productId }
		});
	}

	async getFilterField(filterFieldId: string): Promise<FilterFieldEntity> {
		return await this.filterFieldRepository.findOne({
			where: { id: filterFieldId }
		});
	}
}
