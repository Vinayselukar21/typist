
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body

      >
        {" "}
        <div className={`bg-gradient-to-br w-full from-blue-900 via-blue-600 to-blue-400 h-screen`}>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="TypistTheme"
          >
            {children}{" "}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
