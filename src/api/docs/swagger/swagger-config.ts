import path from "path"
import swaggerJSDoc from "swagger-jsdoc"

console.log(__dirname)

export const swaggerSpec = swaggerJSDoc({
  definition: {
    info: {
      title: "WiraChain ABI Deployer API",
      version: "1.0.0",
      description: "API for ABI's and deployment"
    }
  },
  apis: [`${__dirname}/../../../route/*.route.ts`] // <-- esto es lo que debes corregir
})


console.log(path.resolve(__dirname, "../../../route/*.route.ts"))