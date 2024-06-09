import { json, urlencoded } from "express";
import server from "./server.js";
import { startUpRoutes } from "./start/routes.js";

// Routes
startUpRoutes(server);

// Use body parser to read sent json payloads
server.use(
  urlencoded({
    extended: true,
  })
);
server.use(json());

// Run
const port = process.env.PORT || 3333;
server.listen(port, () => console.log("listen on 3333"));
