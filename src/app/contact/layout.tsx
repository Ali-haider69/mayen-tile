import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Contact | Mayen Tile — Schedule Your Free Consultation",
  description:
    "Get in touch with Mayen Tile for a free consultation. Call 650-888-2142 or fill out our form. Serving Palo Alto, Atherton, Menlo Park, and Silicon Valley.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Contact", url: "/contact" }]} />
      {children}
    </>
  );
}
