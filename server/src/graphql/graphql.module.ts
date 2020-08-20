import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { CategoryModule } from "./category/category.module";
import { ProductModule } from "./product/product.module";
import { GeneralModule } from "./general/general.module";
import { SearchModule } from "./search/search.module";
@Module({
	imports: [
		TypeOrmModule,
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
		UserModule,
		CategoryModule,
		ProductModule,
		GeneralModule,
		SearchModule
	]
})
export class GraphqlModule {}
