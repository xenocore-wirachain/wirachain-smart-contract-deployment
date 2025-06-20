import express from "express";
import cors from "cors";

// Routes
import abiRoutes from "./route/abi.route";
import logRoutes from "./route/log.route";

// Swagger
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./api/docs/swagger/swagger-config";

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
