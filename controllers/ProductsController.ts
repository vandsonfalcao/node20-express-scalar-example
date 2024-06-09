import { randomUUID } from "crypto";
import { HttpContext } from "../contracts/HttpContext.js";
import * as yup from "yup";

export default class ProductsController {
  static async index({ request, response }: HttpContext) {
    return response.json([
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
    const schema = yup.object({
      name: yup.string().required(),
    });
    const { name } = await schema.validate(request.body);
    return response.json({
      id: randomUUID(),
      name: name,
      createdAt: new Date().toISOString(),
    });
  }
}
