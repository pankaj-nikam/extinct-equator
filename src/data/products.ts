import type { Product, ProductError } from "../models/product";
import products from "./products.json";

export const getProductById = (id: number): Product | undefined =>
  products.find((p) => p.id === id);

export const productIdInputName = "product-id";
export const productTitleInputName = "product-title";
export const productPriceInputName = "product-price";

export const productTitleInputNameMinLength = 1;
export const productTitleInputNameMaxLength = 30;

export const validateNewProductInput = (
  productTitle: string,
  productPrice: string
): ProductError => {
  const errors = {
    [productTitleInputName]: "",
    [productPriceInputName]: "",
  };
  if (
    typeof productTitle !== "string" ||
    productTitle.length < productTitleInputNameMinLength ||
    productTitle.length > productTitleInputNameMaxLength
  ) {
    errors[productTitleInputName] =
      `The product title must be between ${productTitleInputNameMinLength} and ${productTitleInputNameMaxLength} characters.`;
  }

  if (Number.isNaN(Number(productPrice)) || Number(productPrice) < 1) {
    errors[productPriceInputName] =
      "Product price must be a number greater than 0.";
  }

  return errors;
};
