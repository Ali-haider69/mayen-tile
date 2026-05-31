import { SITE_CONFIG, SERVICES, SERVICE_AREAS, REVIEWS } from "@/lib/constants";

const baseUrl = "https://mayen-tile.vercel.app";

// Organization Schema — site-wide
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mayen Tile",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description:
      "Premium tile installation for Silicon Valley's finest homes. Custom bathrooms, waterproof showers, heated floors, and designer tile work.",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Palo Alto",
      addressRegion: "CA",
      addressCountry: "US",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// LocalBusiness Schema — for local SEO
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: "Mayen Tile",
    image: `${baseUrl}/images/logo.png`,
    url: baseUrl,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    description:
      "Bay Area's premier tile and stone installation company specializing in luxury bathrooms, curbless showers, heated floors, and designer tile work.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Palo Alto",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.4419,
      longitude: -122.143,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
    })),
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: REVIEWS.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: REVIEWS.map((review) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewBody: review.text,
    })),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Contractor License",
      recognizedBy: {
        "@type": "Organization",
        name: "State of California",
      },
      name: SITE_CONFIG.license,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema — for services page
export function ServicesSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mayen Tile Services",
    description: "Premium tile installation services in Silicon Valley",
    itemListElement: SERVICES.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: "Mayen Tile",
          url: baseUrl,
        },
        areaServed: {
          "@type": "Place",
          name: "Silicon Valley, California",
        },
        serviceType: "Tile Installation",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList Schema
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${baseUrl}${item.url}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebPage Schema
export function WebPageSchema({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: `${baseUrl}${url}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Mayen Tile",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Mayen Tile",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema — reusable for any page
export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
