import type { Metadata } from "next";
import {
  Amatic_SC,
  Caveat,
  Caveat_Brush,
  Courgette,
  Dancing_Script,
  Inter,
  Kalam,
  Oleo_Script,
  Satisfy,
  Shadows_Into_Light,
  Shadows_Into_Light_Two,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-provider";
import Header from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });
// const amaticSC = Amatic_SC({ subsets: ["latin"], weight: ["400", "700"] });
// const courgette = Courgette({ subsets: ["latin"], weight: ["400"] });
// const dancingScript = Dancing_Script({ subsets: ["latin"] });
// const caveat = Caveat({ subsets: ["latin"] });
// const shadowsIntoLight = Shadows_Into_Light({
//   subsets: ["latin"],
//   weight: ["400"],
// });
// const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] });
// const oleoScript = Oleo_Script({ subsets: ["latin"], weight: ["400", "700"] });
const kalam = Kalam({ subsets: ["latin"], weight: ["700"] });

// ! Extra
// const caveatBrush = Caveat_Brush({ subsets: ["latin"], weight: ["400"] });
// const shadowsIntoLight2 = Shadows_Into_Light_Two({
//   subsets: ["latin"],
//   weight: ["400"],
// });

export const metadata: Metadata = {
  title: "Goodies",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kalam.className} min-h-screen p-2`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
