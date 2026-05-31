import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Reviews | Mayen Tile — 5-Star Client Testimonials",
  description:
    "Read what Silicon Valley homeowners say about Mayen Tile. 5-star rated luxury tile installation in Palo Alto, Atherton, Menlo Park, and the Bay Area.",
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Reviews", url: "/reviews" }]} />
      {children}
    </>
  );
}
