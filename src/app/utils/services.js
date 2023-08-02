import { basePath } from "../../../next.config";

export const getEndpoint = (path) => {
  return `${basePath}${path}`;
};

export const GET_PRODUCTS_DETAILS = "/products";
