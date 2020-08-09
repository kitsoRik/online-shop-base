import {
	Controller,
	Post,
	UploadedFile,
	UseInterceptors
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("upload")
export class UploadController {
	@Post("/languageJson")
	@UseInterceptors(FileInterceptor("file"))
	languageJson(@UploadedFile() file) {
		return file.filename;
	}
}
