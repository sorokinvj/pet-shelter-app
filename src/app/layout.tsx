import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
        {/* Футер будет добавлен здесь позже */}
      </body>
    </html>
  );
}
