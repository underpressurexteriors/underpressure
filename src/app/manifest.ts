import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.name,
    short_name: business.shortName,
    description: "Licensed and insured pressure washing across North Carolina and Virginia.",
    start_url: "/",
    display: "standalone",
    background_color: "#edeae2",
    theme_color: "#0d4657",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
  };
}
