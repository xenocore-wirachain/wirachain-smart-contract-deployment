import express from "express";
import cors from "cors";

// Routes
import abiRoutes from "./route/abi.route.ts";
import logRoutes from "./route/log.route.ts";

// Swagger
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./api/docs/swagger/swagger-config.ts";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/abi", abiRoutes);
app.use("/logs", logRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`🚀 Running server on http://localhost:${PORT}`);
  console.log(`🚀 Swagger Doc on http://localhost:${PORT}/api-docs`);
});
