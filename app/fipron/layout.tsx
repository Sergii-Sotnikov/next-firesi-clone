import type { Metadata } from "next";
import "../globals.css";
import HeaderFipron from "@/components/Fipron/HeaderFipron/HeaderFipron";
import ClientModalButton from "@/components/Fipron/ClientModalButton/ClientModalButton";
import Footer from "@/components/Footer/Footer";
import {
  Roboto,
  Alumni_Sans_SC,
  Alumni_Sans_Pinstripe,
  Inter,
} from "next/font/google";

const RobotoFont = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: false,
  display: "swap",
});

const AlumniSansSCFont = Alumni_Sans_SC({
  weight: ["400", "500", "700"],
  variable: "--font-alumni-sans-sc",
  subsets: ["latin", "cyrillic"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: false,
  display: "swap",
});

const AlumniSansPinstripeFont = Alumni_Sans_Pinstripe({
  weight: ["400"],
  variable: "--font-alumni-pinstripe",
  subsets: ["latin"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: false,
  display: "swap",
});

const InterFont = Inter({
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: false,
  display: "swap",
});

const siteUrl = "https://firetech.com.ua/";
const pagePath = "/fipron";
const ogImage = "/img/og/fipron.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "FIPRON: автономні системи пожежогасіння - Sticker та Cord",
  description:
    "FIPRON Sticker та FIPRON Cord гасять займання на старті: автономно, безпечно для електроніки й людей",
  keywords: [
    "FIPRON",
    "FIPRON Sticker",
    "FIPRON Cord",
    "автономна система пожежогасіння",
    "локальне пожежогасіння",
    "вогнегасний стікер",
    "вогнегасний шнур",
    "Novec 1230",
    "захист електрощитів",
    "захист розеток",
    "пожежна безпека",
    "гасіння без води",
    "термоактивовані мікрокапсули",
    "мікрокапсули пожежогасіння",
    "серверна безпека",
    "офіс",
    "квартира",
    "замовити консультацію",
  ],
  alternates: {
    canonical: "/fipron",
  },
  openGraph: {
    title: `FIPRON: автономні системи пожежогасіння - Sticker та Cord`,
    description: `FIPRON Sticker та FIPRON Cord гасять займання на старті: автономно, безпечно для електроніки й людей`,
    url: `${siteUrl}${pagePath}`,
    siteName: "FIRETECH",
    images: [
      {
        url: ogImage,
        width: 557,
        height: 649,
        alt: `FIPRON: автономні системи пожежогасіння`,
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function FipronLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uk"
      className={`${RobotoFont.variable} ${AlumniSansSCFont.variable} ${AlumniSansPinstripeFont.variable} ${InterFont.variable}`}
      >
      <body>
        <HeaderFipron>
          <ClientModalButton productName="Замовити" id="1" />
        </HeaderFipron>
        <main>{children}</main>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
