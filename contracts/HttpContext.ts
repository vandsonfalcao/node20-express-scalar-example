import { Request, Response } from "express";
export type HttpContext = {
	request: Request;
	response: Response;
};
