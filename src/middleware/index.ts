import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async ({ request }, next) => {
  console.log("Request....");
  const response = await next();
  console.log("Response...");
});
