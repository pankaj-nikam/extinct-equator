import type { APIContext, APIRoute } from "astro";

export const prerender = false;
import { getProductById } from "../../../data/products";

export const GET: APIRoute = ({ params }: APIContext) => {
  const id = Number(params.id);
  const product = getProductById(id);
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
