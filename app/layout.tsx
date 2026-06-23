import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wickedgoodlawn.com"),
  title: "Wicked Good Lawn Care | Veteran-Owned Lawn Care in Alachua County, FL",
  description:
    "Veteran-owned, insured lawn care serving Alachua County and the surrounding area. Mowing, mulching, seasonal cleanups, gutter cleaning, and shrub trimming. Get a free quote today.",
  openGraph: {
    title: "Wicked Good Lawn Care | Veteran-Owned Lawn Care in Alachua County, FL",
    description:
      "Veteran-owned, insured lawn care serving Alachua County and the surrounding area. Mowing, mulching, seasonal cleanups, gutter cleaning, and shrub trimming.",
    images: [{ url: "/wglc-og-image.png" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
