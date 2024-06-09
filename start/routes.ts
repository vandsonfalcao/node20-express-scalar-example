import type { Express } from "express";
import express from "express";
import { docs } from "../routes/docs.js";
import { products } from "../routes/products.js";
import { swagger } from "../routes/swagger.js";

const startUpRoutes = (server: Express) => {
	server.use(express.json());

	server.use(docs);
	server.use(swagger);
	server.use(products);

	// Default
	server.get(`/`, (_, res) => res.json("Server is Running at 3333"));
};

export { startUpRoutes };
