import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2a7z18y8", // Hardcode it temporarily to test if .env is the issue
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, // This is mandatory for your timeout issue
  perspective: "published",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
