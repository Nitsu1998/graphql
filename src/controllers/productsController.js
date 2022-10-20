import crypto from "crypto";
import Product from "../classes/products.class.js";
import generateRandomCode from "../helpers/generateRandomCode.js";

const productsMap = {};

const createProduct = ({ data }) => {
  const id = crypto.randomBytes(10).toString("hex");
  const code = generateRandomCode();
  const timestamp = new Date().getTime();
  const newProduct = new Product(id, code, timestamp, data);

  productsMap[id] = newProduct;
  return newProduct;
};

const getProduct = ({ id }) => {
  if (!productsMap[id]) throw new Error("Product not exists");

  return productsMap[id];
};

const getProducts = ({ field, value }) => {
  const products = Object.values(productsMap);
  if (field && value) {
    return products.filter((product) => product[field] == value);
  } else {
    return products;
  }
};

const updateProduct = ({ id, data }) => {
  if (!productsMap[id]) throw new Error("Product not exists");

  const productUpdated = new Product(id, data);
  productsMap[id] = productUpdated;

  return productUpdated;
};

const deleteProduct = ({ id }) => {
  if (!productsMap[id]) throw new Error("Product not exists");

  const productDeleted = productsMap[id];
  delete productsMap[id];

  return productDeleted;
};

export default {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
