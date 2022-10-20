import express from "express";
import { graphqlHTTP } from "express-graphql";
import productSchema from "./src/graphql/product.schema.js";
import productsController from "./src/controllers/productsController.js";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: productSchema,
    rootValue: {
      getProducts: productsController.getProducts,
      getProduct: productsController.getProduct,
      createProduct: productsController.createProduct,
      updateProduct: productsController.updateProduct,
      deleteProduct: productsController.deleteProduct,
    },
    graphiql: true,
  })
);

app.listen(8081, () => {
  console.log("Server listening port 8081");
});
