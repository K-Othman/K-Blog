import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "cd9lqe10",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-04-08",
});
