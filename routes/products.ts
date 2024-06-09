import express from "express";
import { bind } from "../adapters/controllerToExpressAdapter.js";
import ProductsController from "../controllers/ProductsController.js";
const router = express.Router();

router.get(
  "/products",
  /* 
    #swagger.tags = ['Produtos']
    #swagger.summary = 'index'
    #swagger.description = 'Retorna lista de Produtos'
    #swagger.responses[200] = { 
      description: 'lista de produtos',
      schema: [
        {
          id: 'uuid',
          name: "laptop",
          createdAt: '2024-10-20 08:30:00',
        }
      ],
    }
  */
  bind(ProductsController.index)
);
router.post(
  "/products",
  /* 
    #swagger.tags = ['Produtos']
    #swagger.summary = 'store'
    #swagger.description = 'Salva um produto'
    #swagger.responses[200] = { 
      description: 'produto criado',
      schema: 
        {
          id: 'uuid',
          name: "laptop",
          createdAt: '2024-10-20 08:30:00',
        },
    }
  */
  bind(ProductsController.store)
);

export { router as products };
