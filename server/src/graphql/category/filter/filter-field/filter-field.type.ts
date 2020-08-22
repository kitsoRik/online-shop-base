import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType("FilterField")
export class FilterFieldType {
    @Field(type => Int)
    id: number;
}
