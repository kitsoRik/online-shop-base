import { Controller, Get, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { resolve } from "path";
import { StaticService } from "./static.service";

@Controller("static")
export class StaticController {
	constructor(private staticService: StaticService) {}

	@Get("/translations/:lng")
	async translations(@Param("lng") lng: string, @Res() res: Response) {
		const path = await this.staticService.translationPathByLanguageId(lng);
		res.sendFile(path);
	}
}
