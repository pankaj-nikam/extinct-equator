import type { APIRoute } from "astro";

export const prerender = false;
import products from "../../data/products.json";

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
