import { docs } from "./routes/docs.js";
import { products } from "./routes/products.js";
import { swagger } from "./routes/swagger.js";
import server from "./server.js";

// Routes
server.use(products);
server.use(swagger);
server.use(docs);

// Default
server.get(`/`, (_, res) => res.json("Server is Running at 3333"));
server.listen(3333, () => console.log("listen on 3333"));
