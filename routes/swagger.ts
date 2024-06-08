import express from "express";
import { readFileSync, readdirSync } from "fs";
import { dirname, resolve } from "path";
import swaggerAutogen from "swagger-autogen";
import { fileURLToPath } from "url";
import { inspect } from "util";
import doc from "../docs/index.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const swaggerFilePath = resolve(__dirname, "..", "swagger-api-doc.json");
const routeFileDirectories = readdirSync(__dirname, { withFileTypes: true })
	.filter((item) => !item.isDirectory())
	.map((item) => resolve(__dirname, item.name));

router.get(`/swagger`, async (_, res) => {
	/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
  root file where the route starts, such as index.js, app.js, routes.js, etc ... */
	try {
		swaggerAutogen({ openapi: "3.0.0" })(swaggerFilePath, routeFileDirectories, doc);
		const buffer = readFileSync(swaggerFilePath);
		return res.json(JSON.parse(buffer.toString()));
	} catch (error) {
		return res.json(inspect(error, { depth: 10 }));
	}
});

export { router as swagger };
