import server from "./server.js";
import { startUpRoutes } from "./start/routes.js";

// Routes
startUpRoutes(server);

// Run
const port = process.env.PORT || 3333;
server.listen(port, () => console.log("listen on 3333"));
