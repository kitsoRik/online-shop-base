import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphqlModule } from "./graphql/graphql.module";
import { UploadModule } from "./upload/upload.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from './config/config.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			host: "localhost",
			username: "postgres",
			password: "postgres",
			database: "online-shop-base",
			synchronize: true,
			entities: [__dirname + "/**/*.entity.{js,ts}"]
		}),
		GraphqlModule,
		UploadModule,
		ConfigModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
