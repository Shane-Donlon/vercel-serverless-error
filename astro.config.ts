import vercel from '@astrojs/vercel/serverless';
import qwikdev from "@qwikdev/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev()],
  adapter: vercel(),
});
