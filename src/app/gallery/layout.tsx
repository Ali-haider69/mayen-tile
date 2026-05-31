import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Gallery | Mayen Tile — Luxury Tile Project Portfolio",
  description:
    "Browse our portfolio of luxury tile installations across Silicon Valley. Bathrooms, showers, kitchens, and floors in Palo Alto, Atherton, Menlo Park, and more.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Gallery", url: "/gallery" }]} />
      {children}
    </>
  );
}
