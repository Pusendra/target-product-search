import config from "../config/config";

export const getEndpoint = (path) => {
  return `${config?.basePath}${path}`;
};

export const GET_PRODUCTS_DETAILS = "/products";
