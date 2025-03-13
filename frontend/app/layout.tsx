import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixagram",
  description: "Pixagram is a social media plateform.",
  other: {
    "google": "notranslate",  // Prevents translation
  },
};

//cheking the route
import RouteChecker from "./components/route_checker";
import AppProvider from "./context/AppContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <RouteChecker>
            {children}
          </RouteChecker>
        </AppProvider>
      </body>
    </html>
  );
}
