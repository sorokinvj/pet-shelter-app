import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Приют Эвакуированных Лап",
  description: "Найди себе верного друга",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="font-sans bg-gray-50 text-gray-800">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
