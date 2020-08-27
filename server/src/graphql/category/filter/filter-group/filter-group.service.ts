import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterGroupEntity } from "./filter-group.entity";
import { Repository, In } from "typeorm";
import { FilterEntity } from "../filter.entity";
import { FilterFieldEntity } from "./filter-field/filter-field.entity";
import { FilterGroupChangeInput } from "./filter-group-change.input";

@Injectable()
export class FilterGroupService {
	constructor(
		@InjectRepository(FilterGroupEntity)
		private filterGroupRepository: Repository<FilterGroupEntity>,
		@InjectRepository(FilterEntity)
		private filterRepository: Repository<FilterEntity>,
		@InjectRepository(FilterFieldEntity)
		private filterFieldRepository: Repository<FilterFieldEntity>
	) {}

	async addFilterGroup(filterId: number, name: string) {
		const group = this.filterGroupRepository.create({
			filterId,
			name,
			index: 0
		});

		await this.filterGroupRepository.save(group);

		return group;
	}
	async changeFilterGroup(
		filterGroupId: string,
		change: FilterGroupChangeInput
	) {
		const group = await this.filterGroupRepository.findOne({
			id: filterGroupId
		});

		if (change.orderedItemsIds) {
			const orderedIds = change.orderedItemsIds;

			const items = await this.filterFieldRepository.find({
				where: { filterGroupId }
			});

			for (let i = 0; i < items.length; i++) {
				const item = items[i];
				item.index = orderedIds.findIndex(
					orderedItemId => orderedItemId === item.id
				);
			}

			await this.filterFieldRepository.save(items);
		}
		if (change.newGroupId) {
			await this.filterFieldRepository.query(
				`UPDATE filter_fields SET index=index-1 WHERE filter_group_id = '${filterGroupId}' AND index > ${change.deleteIndex}`
			);
			await this.filterFieldRepository.query(
				`UPDATE filter_fields SET index=index+1 WHERE filter_group_id = '${change.newGroupId}' AND index >= ${change.newGroupIndex}`
			);

			const deleteItem = await this.filterFieldRepository.findOne({
				where: { filterGroupId, index: change.deleteIndex }
			});

			if (deleteItem) {
				deleteItem.filterGroupId = change.newGroupId;
				deleteItem.index = change.newGroupIndex;

				await this.filterFieldRepository.save(deleteItem);
			}
		}

		if (change.name !== undefined || change.name !== null) {
			group.name = change.name;
		}

		await this.filterGroupRepository.save(group);

		return group;
	}

	async changeFilterGroupsOrder(orderedGroupsIds) {
		const orderedIds = orderedGroupsIds;

		const groups = await this.filterGroupRepository.find({
			where: { id: In(orderedIds) }
		});

		for (let i = 0; i < groups.length; i++) {
			const group = groups[i];
			group.index = orderedIds.findIndex(
				orderedGroupId => orderedGroupId === group.id
			);
		}

		await this.filterGroupRepository.save(groups);

		return groups;
	}

	async getFilter(filterId: number) {
		return this.filterRepository.findOne({ id: filterId });
	}

	async getFields(filterGroupId: string) {
		return this.filterFieldRepository.find({ where: { filterGroupId } });
	}
}
