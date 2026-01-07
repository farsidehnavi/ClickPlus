import { type Metadata } from "next";
// import { faIR } from '@clerk/localizations'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from './Components/Molecules/Header/Header'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClickPlus",
  icons: ["/Logo/Tiny.svg"],
};

// import { ClerkProvider } from '@clerk/nextjs'
export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
    // <ClerkProvider localization={faIR}>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
    // </ClerkProvider>
  );
}