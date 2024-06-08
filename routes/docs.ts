import { apiReference } from "@scalar/express-api-reference";
import express from "express";

const router = express.Router();
router.get(
	"/docs",
	apiReference({
		spec: {
			url: "/swagger",
		},
	})
);

export { router as docs };
