import { readFileSync, readdirSync } from "fs";
import { dirname, resolve } from "path";
import swaggerAutogen from "swagger-autogen";
import { fileURLToPath } from "url";
import { inspect } from "util";
import { HttpContext } from "../contracts/HttpContext.js";
import doc from "../docs/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const swaggerFilePath = resolve(__dirname, "..", "tmp", "swagger-api-doc.json");
const routePath = resolve(__dirname, "..", "routes");
const routeFileDirectories = readdirSync(routePath, {
	withFileTypes: true,
})
	.filter((item) => !item.isDirectory())
	.map((item) => resolve(routePath, item.name));

export default class SwaggerController {
	static async getOpenApiDoc({ request, response }: HttpContext) {
		/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
  root file where the route starts, such as index.js, app.js, routes.js, etc ... */
		try {
			swaggerAutogen({ openapi: "3.0.0", language: 'pt-BR' })(swaggerFilePath, routeFileDirectories, doc);
			const buffer = readFileSync(swaggerFilePath);
			return response.json(JSON.parse(buffer.toString()));
		} catch (error) {
			return response.json(inspect(error, { depth: 10 }));
		}
	}
}
