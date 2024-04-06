import "./globals.css";
import { Inter } from "next/font/google";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Advokatska kancelarija SL",
  description: "Advokatska kancelarja SL, Novi Sad",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
