import type { APIRoute } from "astro";

export const prerender = false;
import products from "../../../data/products.json";
import {
  productPriceInputName,
  productTitleInputName,
  validateNewProductInput,
} from "../../../data/products";

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const productTitle = data.get(productTitleInputName) as string;
  const productPrice = data.get(productPriceInputName) as string;

  return new Response(
    JSON.stringify({
      id: 1000, // hard-coded ID for the new product but in reality this would come from the backend database
      title: productTitle,
      price: productPrice,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
