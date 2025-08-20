import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Todo App",
  description: "Simple Todo with Next.js + Tailwind + daisyUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* data-theme controls daisyUI theme; change to "dark" if you like */}
      <body className="bg-base-200 min-h-screen" data-theme="light">
        <main className="container mx-auto p-6">{
          children}
        </main>
      </body>
    </html>
  );
}
