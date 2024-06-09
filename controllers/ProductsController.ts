import { randomUUID } from "crypto";
import { HttpContext } from "../contracts/HttpContext.js";

export default class ProductsController {
  static async index({ request, response }: HttpContext) {
    response.json([
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
  }

  static async store({ request, response }: HttpContext) {
    const { name } = request.body;
    if (!name) return response.status(422).send("name is required");
    response.json({
      id: randomUUID(),
      name: "leite",
      createdAt: new Date().toISOString(),
    });
  }
}
