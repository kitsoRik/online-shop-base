import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { CategoryModule } from "./category/category.module";
import { JwtModule } from "@nestjs/jwt";
import { Request } from "express";
@Module({
	imports: [
		GraphQLModule.forRoot({
			autoSchemaFile: true,
			cors: {
				origin: (origin, cb) => {
					cb(null, true);
				},
				credentials: true
			}
			// context: ({ req }: { req: Request }, ) => {
			// 	if(req.cookies) {
			// 		const session =
			// 	}
			// }
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
