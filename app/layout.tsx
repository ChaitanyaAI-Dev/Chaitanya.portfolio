import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chaitanyaai-dev-portfolio.vercel.app"),
  title: "Applied AI Engineer - Chaitanya S.",
  description:
    "Portfolio of Chaitanya S., an Applied AI Engineer building LLM applications, RAG systems, agentic AI workflows, backend AI services, and document-intelligence platforms.",
  openGraph: {
    title: "Applied AI Engineer - Chaitanya S.",
    description:
      "Portfolio of Chaitanya S., an Applied AI Engineer building LLM applications, RAG systems, agentic AI workflows, backend AI services, and document-intelligence platforms.",
    url: "https://chaitanyaai-dev-portfolio.vercel.app",
    siteName: "Chaitanya S. Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Chaitanya S. - Applied AI Engineering Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Applied AI Engineer - Chaitanya S.",
    description:
      "Portfolio of Chaitanya S., an Applied AI Engineer building LLM applications, RAG systems, agentic AI workflows, backend AI services, and document-intelligence platforms.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
