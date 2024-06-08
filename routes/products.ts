import { randomUUID } from "crypto";
import express from "express";

const router = express.Router();
router.get("/products", (req, res) => {
	res.json([
		{
			id: randomUUID(),
			name: "leite",
			createdAt: new Date().toISOString(),
		},
		{
			id: randomUUID(),
			name: "suco",
			createdAt: new Date().toISOString(),
		},
		{
			id: randomUUID(),
			name: "laptop",
			createdAt: new Date().toISOString(),
		},
	]);
});

router.post("/products", (req, res) => {
	const { name } = req.body;
	if (!name) return res.status(422).send("name is required");
	res.json({
		id: randomUUID(),
		name: "leite",
		createdAt: new Date().toISOString(),
	});
});

export { router as products };
