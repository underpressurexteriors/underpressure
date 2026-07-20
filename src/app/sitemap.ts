import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { blogPosts } from "@/lib/blog";
import { resources } from "@/lib/resources";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/residential-pressure-washing",
    "/commercial-pressure-washing",
    "/service-areas",
    "/about",
    "/blog",
    "/resources",
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

  const blogRoutes = blogPosts.map((p) => ({
    url: `${business.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const resourceRoutes = resources.map((r) => ({
    url: `${business.url}/resources/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.65,
  }));

  const legalRoutes = ["/privacy-policy", "/terms-of-service"].map((path) => ({
    url: `${business.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.2,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...blogRoutes,
    ...resourceRoutes,
    ...legalRoutes,
  ];
}
