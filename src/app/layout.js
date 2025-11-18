import "./globals.css";

export const metadata = {
  title:
    "Pinnacle Developments | Luxury Property Development & Construction Company in India",
  description:
    "India's leading luxury property development and construction company. We build ultra-premium residential & commercial projects with cutting-edge technology. Top-tier construction excellence across Mumbai, Delhi, Bangalore & major Indian cities.",
  keywords:
    "luxury property development India, premium construction company India, luxury real estate developers, high-end property construction, luxury residential projects India, commercial property development, ultra-premium builders India, luxury villas India, high-rise construction, smart home construction India, luxury apartments Mumbai, premium builders Delhi, luxury construction Bangalore, Grade A commercial buildings, luxury property management India, top construction company India, best property developers India",
  metadataBase: new URL("https://www.pinnacledevelopments.in"),
  alternates: {
    canonical: "https://www.pinnacledevelopments.in/",
    languages: {
      "en-IN": "https://www.pinnacledevelopments.in/",
      "hi-IN": "https://www.pinnacledevelopments.in/hi/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.pinnacledevelopments.in/",
    title:
      "Pinnacle Developments | Luxury Property Development & Construction in India",
    description:
      "India's premier luxury property development and construction company. Building architectural masterpieces with cutting-edge technology across major Indian cities.",
    images: [
      {
        url: "https://www.pinnacledevelopments.in/images/og-image.jpg",
      },
    ],
    siteName: "Pinnacle Developments",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pinnacle Developments | Luxury Property Development & Construction in India",
    description:
      "India's premier luxury property development and construction company. Building architectural masterpieces with cutting-edge technology.",
    images: ["https://www.pinnacledevelopments.in/images/twitter-image.jpg"],
  },
  robots: "index, follow",
  authors: [{ name: "Pinnacle Developments" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pinnacle Developments",
              description:
                "India's leading luxury property development and construction company specializing in ultra-premium residential and commercial projects.",
              url: "https://www.pinnacledevelopments.in",
              logo: "https://www.pinnacledevelopments.in/logo.png",
              image:
                "https://www.pinnacledevelopments.in/images/company-image.jpg",
              telephone: "+91-123-456-7890",
              email: "info@pinnacledevelopments.in",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Business District",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400001",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.facebook.com/pinnacledevelopments",
                "https://www.instagram.com/pinnacledevelopments",
                "https://www.linkedin.com/company/pinnacledevelopments",
                "https://twitter.com/pinnacledevsin",
              ],
              areaServed: [
                { "@type": "City", name: "Mumbai" },
                { "@type": "City", name: "Delhi" },
                { "@type": "City", name: "Bangalore" },
                { "@type": "City", name: "Gurgaon" },
                { "@type": "City", name: "Jaipur" },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Pinnacle Developments",
              description:
                "Premium luxury property development and construction company in India",
              priceRange: "₹₹₹₹",
              image: "https://www.pinnacledevelopments.in/images/office.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Business District",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "19.0760",
                longitude: "72.8777",
              },
              url: "https://www.pinnacledevelopments.in",
              telephone: "+91-123-456-7890",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Luxury Property Development and Construction",
              provider: {
                "@type": "Organization",
                name: "Pinnacle Developments",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Construction & Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Luxury Residential Construction",
                      description:
                        "Ultra-premium residential property construction with cutting-edge technology",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Commercial Property Development",
                      description:
                        "Grade-A commercial building development and construction",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Property Management",
                      description:
                        "Comprehensive luxury property management services",
                    },
                  },
                ],
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.pinnacledevelopments.in/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://www.pinnacledevelopments.in/#about",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Services",
                  item: "https://www.pinnacledevelopments.in/#services",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Portfolio",
                  item: "https://www.pinnacledevelopments.in/#portfolio",
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
