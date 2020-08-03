import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('User')
export class UserType {
  @Field()
  id: number;

  @Field()
  email: string;
}
