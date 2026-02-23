import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const siteUrl = "https://honeylabs.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HoneyLabs \u2014 Pre-Public Threat Intelligence",
    template: "%s | HoneyLabs",
  },
  description:
    "HoneyLabs operates a global sensor network and enrichment engine that surfaces exploit signals hours to days before public disclosure. De-duplicated, scored, and delivered via API or native SIEM connector.",
  keywords: [
    "threat intelligence",
    "threat intel feed",
    "cyber threat intelligence",
    "CTI platform",
    "exploit intelligence",
    "pre-public vulnerability",
    "honeypot intelligence",
    "SIEM threat feed",
    "vulnerability intelligence",
    "exploit detection",
    "threat data feed",
    "security intelligence platform",
    "IOC feed",
    "honeylabs",
  ],
  authors: [{ name: "HoneyLabs", url: siteUrl }],
  creator: "HoneyLabs",
  publisher: "HoneyLabs",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "HoneyLabs",
    title: "HoneyLabs \u2014 See the Exploit Before the CVE",
    description:
      "Pre-public threat intelligence from a global sensor network. Exploit signals delivered hours to days before disclosure \u2014 enriched, scored, and ready for your pipeline.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HoneyLabs \u2014 Pre-Public Threat Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HoneyLabs \u2014 Pre-Public Threat Intelligence",
    description:
      "Global sensor network surfacing exploit signals before public disclosure. API, syslog, and native SIEM connectors.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HoneyLabs",
    url: siteUrl,
    logo: `${siteUrl}/apple-touch-icon.png`,
    description:
      "Pre-public threat intelligence platform operating a global sensor network and enrichment engine.",
    foundingDate: "2025",
    sameAs: ["https://www.linkedin.com/company/honeylabsnet/"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@honeylabs.net",
      contactType: "sales",
    },
    offers: {
      "@type": "Offer",
      name: "Threat Intelligence Feed",
      description:
        "Exploit signals delivered via API, syslog, or native SIEM connector. Pre-public vulnerability intelligence with 24-72 hour lead time.",
      category: "Cyber Threat Intelligence",
    },
  };

  const jsonLdSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HoneyLabs",
    url: siteUrl,
  };

  return (
    <html lang="en" className="bg-background overflow-x-hidden">
      <head>
        <meta name="theme-color" content="#050507" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSite) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans bg-background text-slate-50 antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
