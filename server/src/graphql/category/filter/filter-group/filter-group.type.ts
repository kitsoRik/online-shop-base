import { PrimaryGeneratedColumn, Generated, Column, Entity } from "typeorm";
import { ObjectType, Field, Int } from "@nestjs/graphql";
import { FilterType } from "../filter.type";

@ObjectType("FilterGroup")
export class FilterGroupType {
	@Field()
	id: string;

	@Field()
	name: string;

	@Field(type => Int)
	index: number;
}
