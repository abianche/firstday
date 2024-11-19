import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "First Day",
    short_name: "First Day",
    description: "An onboarding app and training platform for your employees",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1017",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
