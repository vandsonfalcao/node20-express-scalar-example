import { HttpContext } from "./HttpContext.js";

export interface ControllerMethod {
	(ctx: HttpContext): Promise<unknown>;
}
