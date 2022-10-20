import { buildSchema } from "graphql";

const productSchema = buildSchema(`
    input ProductInput {
        title: String,
        description: String,
        url: String,
        price: Int,
        stock: Int,
    }
    type Product {
        id: ID!,
        title: String,
        description: String,
        code: String,
        url: String,
        price: Int,
        stock: Int,
        timestamp: Float,
    }
    type Query {
        getProduct(id: ID!): Product,
        getProducts(field: String, value: String): [Product],
    }
    type Mutation {
        createProduct(data: ProductInput): Product,
        updateProduct(id: ID!, data: ProductInput): Product,
        deleteProduct(id: ID!): Product,
    }
`);

export default productSchema;
