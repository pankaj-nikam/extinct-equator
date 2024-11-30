import type { APIContext, APIRoute } from "astro";

export const prerender = false;
import products from "../../../data/products.json";

export const GET: APIRoute = ({ params }: APIContext) => {
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);
  if (product) {
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new Response(null, {
      status: 404,
      statusText: "Product not found.",
    });
  }
};
