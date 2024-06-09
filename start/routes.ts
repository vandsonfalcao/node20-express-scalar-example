import type { Express } from "express";
import { docs } from "../routes/docs.js";
import { products } from "../routes/products.js";
import { swagger } from "../routes/swagger.js";

const startUpRoutes = (server: Express) => {
	// Default
	server.get(`/`, (_, res) => res.json("Server is Running at 3333"));

	// Routes
	server.use(docs);
	server.use(swagger);
	server.use(products);
};

export { startUpRoutes };
