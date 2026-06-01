import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dimuthu Electronics | TV Repairs, Displays & Installation",
    short_name: "Dimuthu Electronics",
    description:
      "LED/LCD TV display sales, professional installation, and expert repair services in Ja-Ela, Sri Lanka. Serving since 1996.",
    start_url: "/",
    display: "standalone",
    theme_color: "#1a56db",
    background_color: "#ffffff",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
