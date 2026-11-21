import type { Metadata, Viewport } from "next";
import {
  Geist_Mono,
  Instrument_Sans,
  Instrument_Serif,
} from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeScript } from "@/components/layout/theme-script";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [...site.keywords],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.title}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090B" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  givenName: "Houssem Eddin",
  familyName: "Jlassi",
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Full-Stack Developer",
  description: profile.intro,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tunis",
    addressCountry: "TN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "ISLAIb Béja",
  },
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Angular",
    "TypeScript",
    "PostgreSQL",
    "REST APIs",
  ],
  sameAs: [site.socials.github, ...(site.socials.linkedin ? [site.socials.linkedin] : [])],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${site.name} — Portfolio`,
  url: site.url,
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: site.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${geistMono.variable}`}
    >
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
      </head>
      <body className="grain flex min-h-dvh flex-col antialiased">
        <a
          href="#main"
          className="sr-only rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>

        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
