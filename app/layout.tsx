import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amsal Mohammad Nizamuddin — Industrial Engineer",
  description:
    "Industrial Engineer at Penn State. Procurement, supply chain, and automation. Currently building the future at the intersection of operations and AI.",
  openGraph: {
    title: "Amsal Mohammad Nizamuddin",
    description:
      "Industrial Engineer. Procurement. Supply chain. AI automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ink text-paper">{children}</body>
    </html>
  );
}
