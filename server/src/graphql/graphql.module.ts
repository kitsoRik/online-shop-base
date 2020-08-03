import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { UserEntity } from "./user/user.entity";
import { CategoryModule } from "./category/category.module";

@Module({
	imports: [
		GraphQLModule.forRoot({
			autoSchemaFile: true
		}),
		TypeOrmModule.forRoot({
			type: "postgres",
			host: "localhost",
			username: "postgres",
			password: "postgres",
			database: "online-shop-base",
			synchronize: true,
			entities: [__dirname + "/../**/*.entity.{js,ts}"]
		}),
		UserModule,
		CategoryModule
	]
})
export class GraphqlModule {}
