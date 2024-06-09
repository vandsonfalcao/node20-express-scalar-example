import express from "express";
import { bind } from "../adapters/controllerToExpressAdapter.js";
import SwaggerController from "../controllers/SwaggerController.js";

const router = express.Router();

router.get(`/swagger`, bind(SwaggerController.getOpenApiDoc));

export { router as swagger };
