import express from "express";
import { bind } from "../adapters/controllerToExpressAdapter.js";
import ProductsController from "../controllers/ProductsController.js";
const router = express.Router();

router.get("/products", bind(ProductsController.index));
router.post("/products", bind(ProductsController.store));
router.post(`/test`, (req, res) => {
  const { name } = req.body
  return res.send(name)
});

export { router as products };
