import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SearchProvider } from "@/context/SearchContext";

const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Countries App",
  description: "An app to view countries and their details",
  generator: "Next.js",
  applicationName: "Countries App",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Countries",
    "Country",
    "Countries App",
    "App",
    "Country App",
    "Country Detail",
    "Detail",
  ],
  authors: [
    {
      name: "Neşathan Öztürk",
      url: "https://www.github.com/nesathanozturk/",
    },
  ],
  creator: "Neşathan Öztürk",
  publisher: "Neşathan Öztürk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <ThemeProvider>
          <SearchProvider>{children}</SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
