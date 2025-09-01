import { fileURLToPath } from "node:url";
import { generateApi } from "swagger-typescript-api";
import createJiti from "jiti";
import dotenv from "dotenv";

dotenv.config();
const jiti = createJiti(fileURLToPath(import.meta.url));

async function generate() {
  /** @type {import('../env.ts').Env} */
  const env = await jiti.import("../env.ts").then((mod) => mod.env);
  await generateApi({
    url: env.CMS_DOCUMENTATION,
    output: `${process.cwd()}/src/cms`,
  });
}

generate();
