import { Module } from "@nestjs/common";
import { UploadService } from "./upload.service";
import { UploadController } from "./upload.controller";
import { MulterModule } from "@nestjs/platform-express";
import { resolve } from "path";

@Module({
	imports: [
		MulterModule.register({
			dest: resolve(__dirname, "../../upload/translations")
		})
	],
	providers: [UploadService],
	controllers: [UploadController]
})
export class UploadModule {}
