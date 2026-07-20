import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/residential-pressure-washing",
    "/commercial-pressure-washing",
    "/service-areas",
    "/about",
    "/gallery",
    "/faq",
    "/contact",
  ].map((path) => ({
    url: `${business.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${business.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${business.url}/service-areas/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const legalRoutes = ["/privacy-policy", "/terms-of-service"].map((path) => ({
    url: `${business.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.2,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...legalRoutes];
}
