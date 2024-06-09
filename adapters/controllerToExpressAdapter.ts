import type { Request, Response } from "express";
import { HttpContext } from "../contracts/HttpContext.js";
import { ControllerMethod } from "../contracts/ControllerMethod.js";

const controllerToExpressAdapter = (controllerMethod: ControllerMethod) => {
	return (req: Request, res: Response) => {
		const context: HttpContext = { request: req, response: res };
		return controllerMethod(context);
	};
};

export { controllerToExpressAdapter as bind };
